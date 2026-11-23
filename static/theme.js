try {
  const preference = localStorage.getItem('portfolio-theme');
  if (preference === 'dark' || preference === 'light') document.documentElement.dataset.theme = preference;
} catch { /* The stylesheet follows the system preference when storage is unavailable. */ }