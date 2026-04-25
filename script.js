/* ═══════════════════════════════════════
   1. THEME — авто-визначення + перемикач
═══════════════════════════════════════ */
const themeToggleBtn = document.getElementById('theme-toggle');
let currentTheme = 'light';

function applyTheme(theme) {
  currentTheme = theme;
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleBtn.textContent = '☀️';
  } else {
    document.body.classList.remove('dark-mode');
    themeToggleBtn.textContent = '🌙';
  }
}

// Авто: день 7:00–21:00 = light, решта = dark
const hour = new Date().getHours();
applyTheme(hour >= 7 && hour < 21 ? 'light' : 'dark');

themeToggleBtn.addEventListener('click', () => {
  applyTheme(currentTheme === 'light' ? 'dark' : 'light');
});


/* ═══════════════════════════════════════
   2. FOOTER — OS і браузер
═══════════════════════════════════════ */
const osInfo = navigator.platform;
const browserInfo = navigator.userAgent;

localStorage.setItem('os', osInfo);
localStorage.setItem('browser', browserInfo);

document.getElementById('os-info').textContent = localStorage.getItem('os');
document.getElementById('browser-info').textContent = localStorage.getItem('browser');


/* ═══════════════════════════════════════
   3. REVIEWS — fetch з jsonplaceholder
═══════════════════════════════════════ */
const variant = 11;
const reviewsContainer = document.getElementById('reviews-container');

fetch(`https://jsonplaceholder.typicode.com/posts/${variant}/comments`)
  .then(response => response.json())
  .then(comments => {
    reviewsContainer.innerHTML = comments.map(comment => `
      <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
        <p class="font-bold text-slate-700">${comment.email}</p>
        <p class="text-sm font-semibold text-slate-500 mb-2">${comment.name}</p>
        <p class="text-slate-600 text-sm leading-relaxed">${comment.body}</p>
      </div>
    `).join('');
  })
  .catch(error => {
    console.error('Помилка:', error);
    reviewsContainer.innerHTML = '<p class="text-red-500">Не вдалося завантажити відгуки.</p>';
  });


/* ═══════════════════════════════════════
   4. CONTACT FORM MODAL — через 60 сек
═══════════════════════════════════════ */
const modal = document.getElementById('contact-modal');
const closeModalBtn = document.getElementById('close-modal');

setTimeout(() => {
  modal.classList.remove('hidden');
}, 60000);

closeModalBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// Закриття по кліку на фон
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});