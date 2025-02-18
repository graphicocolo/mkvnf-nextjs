'use client';

import useTheme from '@/app/hooks/useTheme';

const ThemeSwitch = () => {
  const { theme, ToggleTheme } = useTheme();
  return (
    <button
      className="rounded bg-gray-800 px-4 py-2 text-white transition-colors duration-300 dark:bg-gray-200 dark:text-black"
      onClick={ToggleTheme}
    >
      {theme === 'light' ? '🌙 ダークモードに切り替え' : '☀️ ライトモードに切り替え'}
    </button>
  );
};

export default ThemeSwitch;
