import { useCallback, useEffect, useState } from 'react';

/*
  Tema sınıfı ilk boyamadan ÖNCE public/index.html içindeki küçük script
  tarafından <html> elementine yazılıyor. Burada o durumu okumakla
  başlıyoruz; böylece koyu modda sayfa beyaz yanıp sönmüyor.
*/
const readInitialTheme = () => document.documentElement.classList.contains('dark');

const useTheme = () => {
  const [isDark, setIsDark] = useState(readInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (e) {
      /* localStorage kapalıysa tema yalnızca bu sekmede geçerli olur */
    }
  }, [isDark]);

  const toggleTheme = useCallback(() => setIsDark((prev) => !prev), []);

  return { isDark, toggleTheme };
};

export default useTheme;
