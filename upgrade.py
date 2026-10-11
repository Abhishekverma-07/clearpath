from pathlib import Path
p=Path('/mnt/data/clearpath_rebuild')
js=p/'app.js'; html=p/'index.html'; css=p/'styles.css'
s=js.read_text()
# Add graphic renderer after getCurrentQuestion
needle='function getLanguageName() {'
insert=r'''function renderQuestionGraphic(graphic, label = "Mathematical graphic") {
  const container = $("#question-graphic");
  if (!container) return;
  container.innerHTML = "";
  if (!graphic) { container.hidden = true; return; }
  container.hidden = false;
  container.setAttribute("aria-label", label);
  const wrap = document.createElement("div");
  wrap.className = `math-graphic math-graphic-${graphic.type}`;
  if (graphic.type === "triangle") {
    wrap.innerHTML = `<svg viewBox="0 0 520 280" role="img" aria-labelledby="graphic-title graphic-desc"><title id="graphic-title">Triangle diagram</title><desc id="graphic-desc"></desc><polygon points="80,220 440,220 300,55" fill="none" stroke="currentColor" stroke-width="6"/><text x="64" y="242">A</text><text x="445" y="242">B</text><text x="302" y="42">C</text><text x="245" y="245">10 cm</text><text x="310" y="145">6 cm</text></svg>`;
    wrap.querySelector('#graphic-desc').textContent = graphic.desc;
  } else if (graphic.type === "bar") {
    const bars = graphic.values.map((v,i)=>`<g><rect x="${70+i*100}" y="${220-v*12}" width="58" height="${v*12}" rx="8"></rect><text x="${99+i*100}" y="245" text-anchor="middle">${graphic.labels[i]}</text><text x="${99+i*100}" y="${210-v*12}" text-anchor="middle">${v}</text></g>`).join("");
    wrap.innerHTML = `<svg viewBox="0 0 520 280" role="img" aria-labelledby="graphic-title graphic-desc"><title id="graphic-title">Bar chart</title><desc id="graphic-desc"></desc><line x1="60" y1="220" x2="480" y2="220" stroke="currentColor" stroke-width="4"/><line x1="60" y1="40" x2="60" y2="220" stroke="currentColor" stroke-width="4"/>${bars}</svg>`;
    wrap.querySelector('#graphic-desc').textContent = graphic.desc;
  } else if (graphic.type === "numberline") {
    const points = [0,1,2,3,4,5,6,7,8,9,10].map(n=>`<g><circle cx="${50+n*42}" cy="145" r="8"/><text x="${50+n*42}" y="180" text-anchor="middle">${n}</text></g>`).join("");
    wrap.innerHTML = `<svg viewBox="0 0 520 220" role="img" aria-labelledby="graphic-title graphic-desc"><title id="graphic-title">Number line</title><desc id="graphic-desc"></desc><line x1="45" y1="145" x2="475" y2="145" stroke="currentColor" stroke-width="5"/>${points}<path d="M260 105 C300 60 340 60 380 105" fill="none" stroke="currentColor" stroke-width="5" marker-end="url(#arrow)"/><defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="currentColor"/></marker></defs></svg>`;
    wrap.querySelector('#graphic-desc').textContent = graphic.desc;
  } else if (graphic.type === "circle") {
    wrap.innerHTML = `<svg viewBox="0 0 520 280" role="img" aria-labelledby="graphic-title graphic-desc"><title id="graphic-title">Circle diagram</title><desc id="graphic-desc"></desc><circle cx="260" cy="140" r="92" fill="none" stroke="currentColor" stroke-width="6"/><line x1="260" y1="140" x2="352" y2="140" stroke="currentColor" stroke-width="5"/><circle cx="260" cy="140" r="6" fill="currentColor"/><text x="302" y="128">r = 7 cm</text></svg>`;
    wrap.querySelector('#graphic-desc').textContent = graphic.desc;
  } else if (graphic.type === "grid") {
    let lines=""; for(let i=40;i<=480;i+=44) lines+=`<line x1="${i}" y1="30" x2="${i}" y2="250"/>`; for(let y=30;y<=250;y+=44) lines+=`<line x1="40" y1="${y}" x2="480" y2="${y}"/>`;
    wrap.innerHTML = `<svg viewBox="0 0 520 280" role="img" aria-labelledby="graphic-title graphic-desc"><title id="graphic-title">Coordinate grid</title><desc id="graphic-desc"></desc><g stroke="currentColor" opacity=".22">${lines}</g><line x1="40" y1="140" x2="480" y2="140" stroke="currentColor" stroke-width="4"/><line x1="260" y1="30" x2="260" y2="250" stroke="currentColor" stroke-width="4"/><circle cx="348" cy="96" r="9" fill="currentColor"/><text x="360" y="88">(2, 2)</text></svg>`;
    wrap.querySelector('#graphic-desc').textContent = graphic.desc;
  }
  container.appendChild(wrap);
}

function getLanguageName() {'''
s=s.replace(needle,insert,1)
# Replace render math block to support native MathML + visible hidden speech
old='''  const mathContainer = $("#question-math");
  mathContainer.innerHTML = "";
  if (question.content.mathml) {
    mathContainer.innerHTML = question.content.mathml;
    mathContainer.hidden = false;
    mathContainer.setAttribute("role", "img");
    mathContainer.setAttribute("aria-label", question.content.mathLabel || "Mathematical expression");
  } else {
    mathContainer.hidden = true;
    mathContainer.removeAttribute("role");
    mathContainer.removeAttribute("aria-label");
  }
'''
new='''  const mathContainer = $("#question-math");
  mathContainer.innerHTML = "";
  if (question.content.mathml) {
    mathContainer.innerHTML = question.content.mathml;
    mathContainer.hidden = false;
    mathContainer.setAttribute("aria-label", question.content.mathLabel || "Mathematical expression");
    const spoken = document.createElement("span");
    spoken.className = "sr-only math-spoken-description";
    spoken.textContent = question.content.mathLabel || "Mathematical expression";
    mathContainer.appendChild(spoken);
  } else {
    mathContainer.hidden = true;
    mathContainer.removeAttribute("aria-label");
  }
  renderQuestionGraphic(question.content.graphic, question.content.graphic?.desc || "Mathematical graphic");
'''
if old not in s: raise SystemExit('math block not found')
s=s.replace(old,new,1)
# Read current question include graphic desc, instruction
old='''  speak(`${questionNumber} ${$("#test-title").textContent}. ${question.content.mathLabel ? `${question.content.mathLabel}.` : ""} ${options}. ${remaining}.`);'''
new='''  const visualDescription = question.content.graphic?.desc ? `${question.content.graphic.desc}.` : "";
  speak(`${questionNumber} ${$("#test-title").textContent}. ${question.content.mathLabel ? `${question.content.mathLabel}.` : ""} ${visualDescription} ${options}. ${remaining}.`);'''
s=s.replace(old,new,1)
# make speech read explicit independent of toggle
old='''$("#read-question").addEventListener("click", () => {
  if (!$("#speech-toggle").checked) { showToast("Read questions aloud is turned off in Accessibility settings."); return; }
  readCurrentQuestion();
});'''
new='''$("#read-question").addEventListener("click", () => readCurrentQuestion());'''
s=s.replace(old,new,1)
# safer storage state initialization
s=s.replace('knownNotificationIds: new Set(JSON.parse(localStorage.getItem("clearpath-known-notifications") || "[]")),','knownNotificationIds: new Set((() => { try { return JSON.parse(localStorage.getItem("clearpath-known-notifications") || "[]"); } catch { return []; } })()),',1)
js.write_text(s)

# Add graphic container in HTML and math lab copy
h=html.read_text()
h=h.replace('<div id="question-math" class="question-math" hidden></div>','<div id="question-math" class="question-math" hidden></div><div id="question-graphic" class="question-graphic" hidden></div>',1)
h=h.replace('<span>5 questions</span><span>5 minutes</span><span>English + Hindi</span><span>Semantic MathML</span>','<span>8 questions</span><span>8 minutes</span><span>English + Hindi</span><span>MathML + visual diagrams</span>',1)
h=h.replace('Choose a focused practice set or simulate the real exam.','Choose a focused practice set or simulate the real exam. Try the new Math &amp; Science Accessibility Lab for visual + spoken mathematics.',1)
html.write_text(h)

# CSS
c=css.read_text()
c += r'''
/* ClearPath 2.0 visual mathematics layer */
.question-graphic { margin: 1rem 0 1.25rem; padding: 1rem; border: 2px solid var(--line); border-radius: 1rem; background: var(--surface); color: var(--ink); overflow-x:auto; }
.question-graphic[hidden] { display:none; }
.math-graphic { width:min(100%, 34rem); margin:auto; }
.math-graphic svg { display:block; width:100%; height:auto; min-width:22rem; color:var(--teal-dark); }
.math-graphic text { fill:currentColor; font-family:system-ui,sans-serif; font-size:16px; font-weight:700; }
.question-math math { font-size:clamp(1.35rem, 3.5vw, 2.15rem); }
.math-spoken-description { position:absolute!important; width:1px!important; height:1px!important; padding:0!important; margin:-1px!important; overflow:hidden!important; clip:rect(0,0,0,0)!important; white-space:nowrap!important; border:0!important; }
.math-lab-badge { display:inline-flex; align-items:center; gap:.4rem; padding:.35rem .65rem; border-radius:999px; background:var(--teal-soft); color:var(--teal-dark); font-weight:800; font-size:.78rem; }
@media (prefers-reduced-motion: reduce) { .question-graphic, .math-graphic { scroll-behavior:auto; } }
'''
css.write_text(c)
