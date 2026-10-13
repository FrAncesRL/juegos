// Homepage: highscores + sonido 8-bit + navegación teclado
function beep(freq, dur) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = 'square'; o.frequency.value = freq;
    g.gain.value = 0.06;
    o.connect(g); g.connect(ctx.destination);
    o.start(); o.stop(ctx.currentTime + dur);
  } catch (e) {}
}

const keys = ['hi-tetris', 'hi-snake'];
keys.forEach(k => {
  const el = document.getElementById(k);
  if (el) el.textContent = localStorage.getItem(k) || '0';
});
const hg = document.getElementById('hi-gato');
if (hg) hg.textContent = localStorage.getItem('hi-gato') || '—';
const hp = document.getElementById('hi-pong');
if (hp) hp.textContent = localStorage.getItem('hi-pong') || '—';

// high global = max numerico
const nums = keys.map(k => parseInt(localStorage.getItem(k) || '0', 10));
const hgEl = document.getElementById('hi-global');
if (hgEl) hgEl.textContent = String(Math.max(0, ...nums)).padStart(6, '0');

// sonido al picar cabina
document.querySelectorAll('.cabinet').forEach(c => {
  c.addEventListener('click', () => { beep(880, 0.08); setTimeout(() => beep(1320, 0.1), 90); });
});

// navegación con flechas + enter
const cabs = [...document.querySelectorAll('.cabinet')];
let idx = 0;
function focus(i) {
  idx = (i + cabs.length) % cabs.length;
  cabs.forEach((c, j) => c.style.outline = j === idx ? '3px dashed #ffe600' : 'none');
  cabs[idx].scrollIntoView({ block: 'nearest' });
}
if (cabs.length) focus(0);
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') { focus(idx + 1); beep(440, 0.05); }
  if (e.key === 'ArrowLeft') { focus(idx - 1); beep(440, 0.05); }
  if (e.key === 'Enter') { beep(880, 0.08); cabs[idx].click(); }
});
