import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import type { FC } from 'react';

export const ModeToggle: FC = () => {
  const toggleMode = () => {
    const isDarkMode = document.documentElement.classList.toggle('dark');
    window.localStorage.isDarkMode = isDarkMode;
  };

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="gold-spiral group relative rounded-full px-3 py-2 after:rounded-full"
      onClick={toggleMode}
    >
      <SunIcon className="h-6 w-6 text-zinc-500 transition group-hover:text-zinc-800 dark:hidden" />
      <MoonIcon className="hidden h-6 w-6 text-zinc-400 transition group-hover:text-zinc-200 dark:block" />
    </button>
  );
};
