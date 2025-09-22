document.addEventListener('DOMContentLoaded', () => {
  const $ = (sel) => document.querySelector(sel);

  const nickname = $('#nickname');
   const sex = $('#sex');
  const klass = $('#class');
   const realName = $('#realName');
   const age = $('#age');
   const realBody = $('#realBody');
   const realAura = $('#realAura');
   const avatarBody = $('#avatarBody');
   const avatarOutfit = $('#avatarOutfit');
   const avatarAura = $('#avatarAura');
   const pers1 = $('#pers1');
   const pers2 = $('#pers2');
   const pers3 = $('#pers3');
   const pers4 = $('#pers4');
   const occupation = $('#occupation');
   const speak1 = $('#speak1');
   const speak2 = $('#speak2');
   const equipment = $('#equipment');
   const sigSkill = $('#sigSkill');
   const skills = $('#skills');
   const combatStyle = $('#combatStyle');
   const desc1 = $('#desc1');
   const desc2 = $('#desc2');
   const desc3 = $('#desc3');
   const triv1 = $('#triv1');
   const triv2 = $('#triv2');
   const triv3 = $('#triv3');
   const level = $('#level');
   const className = $('#className');
   const quote1 = $('#quote1');
   const quote2 = $('#quote2');
  const profileImage = $('#profileImage');
  const gameImage = $('#gameImage');

  const previewNickname = $('#preview-nickname');
   const previewMeta = $('#preview-meta');
  const previewQuote = $('#preview-quote');
  const previewBio = $('#preview-bio');
  const previewTraits = $('#preview-traits');
  const previewProfile = $('#preview-profile');
  const previewGameImage = $('#preview-game-image');
   const personaStructured = $('#persona-structured');

  const btnGenerate = $('#btn-generate');
  const btnCopy = $('#btn-copy-md');

  function updatePreview() {
     const nn = (nickname.value || 'Erencha Nickname').trim();
     const sx = (sex.value || 'Sex').trim();
     const ag = (age.value || 'Age').trim();
     const cl = (className.value || klass?.value || 'Class').trim();
     const q = (quote1.value || '대표 문구(Quotes 1)가 여기에 표시됩니다.').trim();
     const b = (desc1.value || '소개(Description) 중 첫 항목이 여기에 표시됩니다.').trim();

    previewNickname.textContent = nn;
     previewMeta.textContent = `${sx} ・ ${ag} ・ ${cl}`;
    previewQuote.textContent = q;
    previewBio.textContent = b;

    // traits
    previewTraits.innerHTML = '';
     [pers1.value, pers2.value, pers3.value, pers4.value].map(v => (v||'').trim()).filter(Boolean).forEach(p => {
      const li = document.createElement('li');
      li.textContent = p;
      previewTraits.appendChild(li);
    });

    // images
    const prof = profileImage.value.trim();
    const game = gameImage.value.trim();
    previewProfile.src = prof || '';
    previewGameImage.src = game || '';

    previewProfile.alt = nn + ' 프로필 이미지';
    previewGameImage.alt = nn + ' 게임 이미지';
     // structured preview
     personaStructured.innerHTML = `
       <section>
         <h3>에렌샤 닉네임</h3>
         <ul>
           <li><strong>Erencha Nickname:</strong> ${nn}</li>
           <li><strong>Real Name:</strong> ${(realName.value||'')}</li>
           <li><strong>Sex:</strong> ${sx}</li>
           <li><strong>Age:</strong> ${ag}</li>
         </ul>
       </section>
       <section>
         <h3>Real Appearance</h3>
         <ul>
           <li><strong>Body:</strong> ${(realBody.value||'')}</li>
           <li><strong>Aura:</strong> ${(realAura.value||'')}</li>
         </ul>
       </section>
       <section>
         <h3>Avatar Appearance</h3>
         <ul>
           <li><strong>Body:</strong> ${(avatarBody.value||'')}</li>
           <li><strong>Outfit:</strong> ${(avatarOutfit.value||'')}</li>
           <li><strong>Aura:</strong> ${(avatarAura.value||'')}</li>
         </ul>
       </section>
       <section>
         <h3>Personality Keywords</h3>
         <ul>
           ${[pers1.value,pers2.value,pers3.value,pers4.value].filter(Boolean).map(v=>`<li>${v}</li>`).join('')}
         </ul>
       </section>
       <section>
         <h3>Occupation</h3>
         <p>${(occupation.value||'')}</p>
       </section>
       <section>
         <h3>Speaking Style</h3>
         <ul>
           ${[speak1.value,speak2.value].filter(Boolean).map(v=>`<li>${v}</li>`).join('')}
         </ul>
       </section>
       <section>
         <h3>Equipment</h3>
         <p>${(equipment.value||'')}</p>
       </section>
       <section>
         <h3>Abilities</h3>
         <ul>
           <li><strong>Signature Skill:</strong> ${(sigSkill.value||'')}</li>
           <li><strong>Skills:</strong> ${(skills.value||'')}</li>
           <li><strong>Combat Style:</strong> ${(combatStyle.value||'')}</li>
         </ul>
       </section>
       <section>
         <h3>Description</h3>
         <ul>
           ${[desc1.value,desc2.value,desc3.value].filter(Boolean).map(v=>`<li>${v}</li>`).join('')}
         </ul>
       </section>
       <section>
         <h3>Trivia</h3>
         <ul>
           ${[triv1.value,triv2.value,triv3.value].filter(Boolean).map(v=>`<li>${v}</li>`).join('')}
           <li><strong>Level</strong> ${(level.value||'')}</li>
           <li><strong>Class</strong> ${(className.value||klass?.value||'')}</li>
         </ul>
       </section>
       <section>
         <h3>Quotes</h3>
         <ul>
           ${[quote1.value,quote2.value].filter(Boolean).map(v=>`<li>"${v}"</li>`).join('')}
         </ul>
       </section>
     `;
   }

   btnGenerate?.addEventListener('click', updatePreview);

    function buildMarkdown() {
      const nn = (nickname.value || '').trim();
      const rn = (realName.value || '').trim();
      const sx = (sex.value || '').trim();
      const ag = (age.value || '').trim();
      const rb = (realBody.value || '').trim();
      const ra = (realAura.value || '').trim();
      const ab = (avatarBody.value || '').trim();
      const ao = (avatarOutfit.value || '').trim();
      const aa = (avatarAura.value || '').trim();
      const pk = [pers1.value, pers2.value, pers3.value, pers4.value].map(v => (v||'').trim()).filter(Boolean);
      const occ = (occupation.value || '').trim();
      const sp = [speak1.value, speak2.value].map(v => (v||'').trim()).filter(Boolean);
      const eq = (equipment.value || '').trim();
      const ss = (sigSkill.value || '').trim();
      const sk = (skills.value || '').trim();
      const cs = (combatStyle.value || '').trim();
      const descs = [desc1.value, desc2.value, desc3.value].map(v => (v||'').trim()).filter(Boolean);
      const trivs = [triv1.value, triv2.value, triv3.value].map(v => (v||'').trim()).filter(Boolean);
      const lv = (level.value || '').trim();
      const cl = (className.value || klass?.value || '').trim();
      const quotes = [quote1.value, quote2.value].map(v => (v||'').trim()).filter(Boolean);

      const header = `### ${nn || '이름 미정'}`;
      const basic = [
        `-   Erencha Nickname: ${nn}`,
        rn ? `-   Real Name: ${rn}` : '',
        sx ? `-   Sex: ${sx}` : '',
        ag ? `-   Age: ${ag}` : ''
      ].filter(Boolean).join('\n');

      const sec = (title, lines) => lines.length ? `\n\n#### ${title}\n\n${lines.map(l=>`-   ${l}`).join('\n')}` : '';

      const realSec = sec('Real Appearance', [
        rb && `Body: ${rb}`,
        ra && `Aura: ${ra}`
      ].filter(Boolean));

      const avatarSec = sec('Avatar Appearance', [
        ab && `Body: ${ab}`,
        ao && `Outfit: ${ao}`,
        aa && `Aura: ${aa}`
      ].filter(Boolean));

      const pkSec = pk.length ? `\n\n#### Personality Keywords\n\n${pk.map(k=>`-   ${k}`).join('\n')}` : '';
      const occSec = occ ? `\n\n#### Occupation\n\n-   ${occ}` : '';
      const spSec = sp.length ? `\n\n#### Speaking Style\n\n-   ${sp.join(' ')}` : '';
      const eqSec = eq ? `\n\n#### Equipment\n\n-   ${eq}` : '';
      const abSec = (ss || sk || cs) ? `\n\n#### Abilities\n\n${[
        ss && `-   Signature Skill: ${ss}`,
        sk && `-   Skills: ${sk}`,
        cs && `-   Combat Style: ${cs}`
      ].filter(Boolean).join('\n')}` : '';
      const descSec = descs.length ? `\n\n#### Description\n\n${descs.map(d=>`-   ${d}`).join('\n')}` : '';

      const triviaLines = [...trivs];
      if (lv) triviaLines.push(`Level ${lv}`);
      if (cl) triviaLines.push(`Class: ${cl}`);
      const triviaSec = triviaLines.length ? `\n\n#### Trivia\n\n${triviaLines.map(t=>`-   ${t}`).join('\n')}` : '';

      const quotesSec = quotes.length ? `\n\n#### Quotes\n\n${quotes.map(q=>`-   "${q}"`).join('\n')}` : '';

      return [header, '', basic, realSec, avatarSec, pkSec, occSec, spSec, eqSec, abSec, descSec, triviaSec, quotesSec]
        .filter(Boolean)
        .join('\n');
    }

    async function copyMarkdown() {
      const md = buildMarkdown();
      try {
        await navigator.clipboard.writeText(md);
        btnCopy?.classList.add('copied');
        const oldText = btnCopy.textContent;
        btnCopy.textContent = '복사됨!';
        setTimeout(()=>{ btnCopy.textContent = oldText; btnCopy.classList.remove('copied'); }, 1400);
      } catch (e) {
        // fallback
        const ta = document.createElement('textarea');
        ta.value = md;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
    }

    btnCopy?.addEventListener('click', () => {
      // 최신 값으로 미리보기 갱신 후 복사 (일관성)
      updatePreview();
      copyMarkdown();
    });
});
