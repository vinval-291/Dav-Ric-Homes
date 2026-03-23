import { useState, useEffect } from 'react';

export function useDarkMode() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    console.log('Dark mode changed:', isDark);
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return { isDark, toggle: () => {
    console.log('Toggling dark mode');
    setIsDark(!isDark);
  } };
}
