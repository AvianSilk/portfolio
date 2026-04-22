/* ============================================================
   Portfolio – script.js
   - Copyright year
   - Animated star canvas (hero only)
   - Typewriter effect (hero only)
   - Scroll-reveal (IntersectionObserver)
   - Mobile hamburger nav
   - Active nav link
   ============================================================ */

/* ── Copyright year ── */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ── Active nav link (highlight current page) ── */
(function setActiveNav() {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

/* ── Mobile hamburger ── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  // Close on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

/* ── Star canvas (hero page only) ── */
(function initStars() {
  const canvas = document.getElementById('star-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let w, h, stars;

  const STAR_COUNT = 130;
  const STAR_COLOR = 'rgba(148, 188, 255, ';

  function resize() {
    w = canvas.width  = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
  }

  function makeStar() {
    return {
      x:  Math.random() * w,
      y:  Math.random() * h,
      r:  Math.random() * 1.4 + 0.2,
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.12,
      o:  Math.random() * 0.55 + 0.1,
    };
  }

  function init() {
    resize();
    stars = Array.from({ length: STAR_COUNT }, makeStar);
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (const s of stars) {
      s.x += s.vx;
      s.y += s.vy;
      if (s.x < 0) s.x = w;
      if (s.x > w) s.x = 0;
      if (s.y < 0) s.y = h;
      if (s.y > h) s.y = 0;

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = STAR_COLOR + s.o + ')';
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  // Draw subtle connecting lines between close stars
  function drawLines() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < stars.length; i++) {
      const a = stars[i];
      a.x += a.vx;
      a.y += a.vy;
      if (a.x < 0) a.x = w;
      if (a.x > w) a.x = 0;
      if (a.y < 0) a.y = h;
      if (a.y > h) a.y = 0;

      // Star dot
      ctx.beginPath();
      ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
      ctx.fillStyle = STAR_COLOR + a.o + ')';
      ctx.fill();

      // Connections to nearby stars
      for (let j = i + 1; j < stars.length; j++) {
        const b = stars[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(79, 158, 255, ${0.06 * (1 - dist / 110)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(drawLines);
  }

  init();
  drawLines();
  window.addEventListener('resize', init);
})();

/* ── Typewriter effect ── */
(function initTypewriter() {
  const el = document.getElementById('typed');
  if (!el) return;

  const phrases = [
    'Full-Stack Developer',
    'AWS Certified Engineer',
    'CS Specialist @ UTM',
    'Open to Internships',
    'Robot Programmer',
  ];

  let phraseIdx = 0;
  let charIdx   = 0;
  let deleting  = false;
  const TYPE_SPEED   = 75;
  const DELETE_SPEED = 40;
  const PAUSE_MS     = 2200;

  function tick() {
    const current = phrases[phraseIdx];

    if (!deleting) {
      el.textContent = current.slice(0, ++charIdx);
      if (charIdx === current.length) {
        deleting = true;
        setTimeout(tick, PAUSE_MS);
        return;
      }
    } else {
      el.textContent = current.slice(0, --charIdx);
      if (charIdx === 0) {
        deleting  = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
      }
    }

    setTimeout(tick, deleting ? DELETE_SPEED : TYPE_SPEED);
  }

  tick();
})();

/* ── Scroll reveal ── */
(function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  items.forEach(el => observer.observe(el));
})();
