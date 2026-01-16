document.getElementById('year').textContent = new Date().getFullYear();

const menuToggle = document.getElementById('menuToggle');
menuToggle && menuToggle.addEventListener('click', () => {
    const links = document.querySelector('.links');
    if (!links) return;
    links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;
        const el = document.querySelector(href);
        if (el) {
            e.preventDefault();
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    })
});

const cards = document.querySelectorAll('.card');
const reveal = () => {
    const top = window.innerHeight * 0.85;
    cards.forEach(c => {
        const r = c.getBoundingClientRect();
        if (r.top < top) c.style.opacity = 1;
        else c.style.opacity = 0.6;
    })
};
window.addEventListener('scroll', reveal);
window.addEventListener('resize', reveal);
reveal();
