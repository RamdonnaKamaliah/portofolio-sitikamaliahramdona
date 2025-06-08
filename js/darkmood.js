document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggleDark');
  const darkIcon = document.getElementById('darkIcon');

  // Cek mode dari localStorage
  if (
    localStorage.getItem('theme') === 'dark' ||
    (!localStorage.getItem('theme') &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
    darkIcon.classList.remove('bx-moon');
    darkIcon.classList.add('bx-sun');
  } else {
    document.documentElement.classList.remove('dark');
    darkIcon.classList.remove('bx-sun');
    darkIcon.classList.add('bx-moon');
  }

  toggleBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');

    const isDark = document.documentElement.classList.contains('dark');

    if (isDark) {
      localStorage.setItem('theme', 'dark');
      darkIcon.classList.remove('bx-moon');
      darkIcon.classList.add('bx-sun');
    } else {
      localStorage.setItem('theme', 'light');
      darkIcon.classList.remove('bx-sun');
      darkIcon.classList.add('bx-moon');
    }
  });
});
