'use client';

import ThemeSwitch from '@/app/_components/ThemeSwitch';
import useTheme from '@/app/hooks/useTheme';

const SamplecontextapiPage = () => {
  const { theme } = useTheme();
  return (
    <div>
      <h1>SamplecontextapiPage</h1>
      <p className="mt-4">現在のテーマ: {theme}</p>
      <ThemeSwitch />
    </div>
  );
};

export default SamplecontextapiPage;
