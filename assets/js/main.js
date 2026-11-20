// Theme toggle: flips between light and dark and remembers the choice.
const root = document.documentElement;
document.querySelector('.theme-toggle').addEventListener('click', () => {
  const current = root.dataset.theme ||
    (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const next = current === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
});

// Lightbox: click any screenshot to view it full size.
const box = document.querySelector('.lightbox');
const boxImg = box.querySelector('img');
const boxCap = box.querySelector('.lightbox__cap');

document.querySelectorAll('[data-zoom] img').forEach(img => {
  img.addEventListener('click', () => {
    if (!img.offsetParent) return;
    boxImg.src = img.currentSrc || img.src;
    boxImg.alt = img.alt;
    boxCap.textContent = img.closest('figure').querySelector('figcaption')?.textContent || '';
    box.showModal();
  });
});
box.addEventListener('click', e => { if (e.target !== boxImg) box.close(); });
