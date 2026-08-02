/* ===================================================
   Himanshu's Web Dev Journal — script.js
   1) Light/Dark theme toggle (persists across pages)
   2) Contact form validation (contact.html only)
=================================================== */

/* ---------- Theme toggle ---------- */
const themeButton = document.getElementById('themeButton');
const savedTheme = localStorage.getItem('theme');

// Apply saved theme on page load, so it stays consistent across pages.
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  if (themeButton) themeButton.textContent = '☀️';
}

if (themeButton) {
  themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    themeButton.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

/* ---------- Contact form validation ---------- */
const form = document.getElementById('messageForm');

if (form) {
  const status = document.getElementById('formStatus');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      status.textContent = 'Please fill in your name, email, and message before sending.';
      status.classList.add('visible');
      return;
    }

    status.textContent = 'Thanks, ' + name + '! This demo form isn\'t connected to a server yet, ' +
      'but your message looked good and is ready to be wired up to one.';
    status.classList.add('visible');
    form.reset();
  });
}
