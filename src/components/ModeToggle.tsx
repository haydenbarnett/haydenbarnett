import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import useTheme from '@haydenbleasel/use-theme';
import type { FC } from 'react';

export const ModeToggle: FC = () => {
  const [theme, setTheme] = useTheme();
  const toggleMode = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="group rounded-full px-3 py-2 ring-1 ring-zinc-300 transition hover:ring-zinc-400 dark:ring-zinc-800 dark:hover:ring-zinc-700"
      onClick={toggleMode}
    >
      <SunIcon className="h-6 w-6 text-zinc-500 transition group-hover:text-zinc-800 dark:hidden" />
      <MoonIcon className="hidden h-6 w-6 text-zinc-500 transition group-hover:text-zinc-200 dark:block" />
    </button>
  );
};
