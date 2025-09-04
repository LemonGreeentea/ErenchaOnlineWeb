import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import Database from 'better-sqlite3';

const app = express();
const PORT = process.env.PORT || 8787;
const ORIGIN = process.env.ALLOW_ORIGIN || '*'; // 배포 시 도메인으로 제한 권장

app.use(cors({ origin: ORIGIN }));
app.use(express.json());
app.use(morgan('dev'));

// SQLite 초기화
const db = new Database('analytics.db');
db.prepare(`CREATE TABLE IF NOT EXISTS downloads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  site TEXT,
  clientId TEXT,
  artifact TEXT,
  itemKey TEXT,
  itemType TEXT,
  itemId TEXT,
  itemName TEXT,
  windowBucket INTEGER,
  ts INTEGER
)`).run();

db.prepare(`CREATE INDEX IF NOT EXISTS idx_downloads_bucket ON downloads(windowBucket, itemKey)`).run();

app.get('/', (req,res)=> res.send('DLC Analytics Server running'));

// 수집 엔드포인트
app.post('/dlc-download', (req,res)=>{
  const { site, clientId, artifact, ts, windowBucket, items } = req.body || {};
  if(!Array.isArray(items) || !site || !artifact || !windowBucket){
    return res.status(400).json({ ok:false, error:'invalid payload' });
  }
  const now = Date.now();
  const insert = db.prepare(`INSERT INTO downloads(site,clientId,artifact,itemKey,itemType,itemId,itemName,windowBucket,ts) VALUES (?,?,?,?,?,?,?,?,?)`);
  const selectDup = db.prepare(`SELECT 1 FROM downloads WHERE site=? AND windowBucket=? AND itemKey=? AND clientId=? LIMIT 1`);

  const tx = db.transaction((rows)=>{
    for(const it of rows){
      const key = it.key || `${it.type}:${it.id}`;
      const dup = selectDup.get(site, windowBucket, key, clientId||'');
      if(dup) continue; // 30분 버킷 중복 방지
      insert.run(site, clientId||'', artifact, key, it.type||'', it.id||'', it.name||'', windowBucket, ts||now);
    }
  });

  try{ tx(items); }catch(e){ console.error(e); return res.status(500).json({ ok:false }); }
  return res.status(204).end();
});

// 간단 조회(운영자)
app.get('/summary', (req,res)=>{
  const rows = db.prepare(`SELECT itemType as type, itemId as id, itemName as name, artifact,
                                  COUNT(1) as cnt
                           FROM downloads
                           GROUP BY itemKey, artifact
                           ORDER BY cnt DESC
  `).all();
  res.json({ ok:true, rows });
});

app.listen(PORT, ()=> console.log(`Analytics server listening on http://localhost:${PORT}`));
