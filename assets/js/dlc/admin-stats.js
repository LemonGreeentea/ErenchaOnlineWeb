(function(){
  const $ = (s,ctx=document)=>ctx.querySelector(s);
  const $$ = (s,ctx=document)=>Array.from(ctx.querySelectorAll(s));
  const STATS_KEY = 'dlcDownloadStats';
  const AUDIT_KEY = 'dlcDownloadAudit';

  function load(key, fallback){ try{ const raw=localStorage.getItem(key); return raw? JSON.parse(raw): fallback; }catch{ return fallback; } }
  function save(key, val){ try{ localStorage.setItem(key, JSON.stringify(val)); }catch{} }
  function bytes(n){ try{ return new Intl.NumberFormat('ko-KR').format(n); }catch{ return String(n); } }
  function fmtTime(ts){ if(!ts) return '-'; try{ return new Date(ts).toLocaleString('ko-KR'); }catch{ return String(ts); } }

  function render(){
    const table = $('#stats-table tbody'); if(!table) return;
    table.innerHTML='';
    const stats = load(STATS_KEY, {});
    const rows = Object.values(stats);
    // sort by count desc
    rows.sort((a,b)=> (b.count||0) - (a.count||0));
    if(!rows.length){
      const tr=document.createElement('tr');
      const td=document.createElement('td'); td.colSpan=5; td.textContent='데이터가 없습니다. 다운로드 페이지에서 번들을 생성해 보세요.';
      tr.appendChild(td); table.appendChild(tr); return;
    }
    rows.forEach(rec=>{
      const tr=document.createElement('tr');
      const artLore = rec.perArtifact?.lorebook||0;
      const artAssets = rec.perArtifact?.assets||0;
      tr.innerHTML = `<td>${rec.type}</td><td>${rec.name||rec.id}</td><td>${rec.count}</td><td>${artLore} / ${artAssets}</td><td>${fmtTime(rec.lastAt)}</td>`;
      table.appendChild(tr);
    });
    // totals
    const total = rows.reduce((s,x)=>s+(x.count||0),0);
    $('#total-count').textContent = bytes(total);
  }

  function wire(){
    $('#btn-reset-stats')?.addEventListener('click', ()=>{
      if(!confirm('로컬 집계 데이터를 초기화할까요?')) return;
      localStorage.removeItem(STATS_KEY);
      render();
    });
    $('#btn-reset-dedup')?.addEventListener('click', ()=>{
      if(!confirm('30분 중복 방지 기록을 초기화할까요?')) return;
      localStorage.removeItem(AUDIT_KEY);
      alert('초기화되었습니다.');
    });
  }

  document.addEventListener('DOMContentLoaded', ()=>{ render(); wire(); });
})();
