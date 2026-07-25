/* ==========================================================================
   ARSENAL DE VENTAS — arsenal.js
   Comportamientos compartidos: tema, reloj, reveal, topbar sticky.
   ========================================================================== */
(function () {
  // ---- Tema (persistente) ----
  const root = document.documentElement;
  const saved = localStorage.getItem('cdi-theme');
  if (saved) root.setAttribute('data-theme', saved);
  const toggle = document.getElementById('themeToggle');
  if (toggle) toggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    localStorage.setItem('cdi-theme', next);
  });

  // ---- Reloj ----
  const clock = document.getElementById('clock');
  if (clock) {
    const tick = () => {
      const d = new Date();
      clock.textContent = d.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' });
    };
    tick(); setInterval(tick, 15000);
  }

  // ---- Año ----
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // ---- Topbar sticky border ----
  const topbar = document.getElementById('topbar');
  if (topbar) {
    const onScroll = () => topbar.classList.toggle('is-stuck', window.scrollY > 8);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ---- Reveal al hacer scroll ----
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-in'));
  }

  // ---- Spotlight en tarjetas (efecto mouse) ----
  document.querySelectorAll('.modcard, .vcard').forEach((card) => {
    card.addEventListener('pointermove', (ev) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (ev.clientX - r.left) + 'px');
      card.style.setProperty('--my', (ev.clientY - r.top) + 'px');
    });
  });
})();
