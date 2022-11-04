import { MoonIcon, SunIcon } from '../Icons';

export const ModeToggle = () => {
  const disableTransitionsTemporarily = () => {
    document.documentElement.classList.add('[&_*]:!transition-none');
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none');
    }, 0);
  };

  const toggleMode = () => {
    disableTransitionsTemporarily();

    let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    let isSystemDarkMode = darkModeMediaQuery.matches;
    let isDarkMode = document.documentElement.classList.toggle('dark');

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode;
    } else {
      window.localStorage.isDarkMode = isDarkMode;
    }
  };

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="group rounded-full px-3 py-2 ring-1 ring-neutral-300 transition hover:ring-neutral-400 dark:ring-neutral-800 dark:hover:ring-neutral-700"
      onClick={toggleMode}
    >
      <SunIcon className="h-6 w-6 text-neutral-500 transition group-hover:text-neutral-800 dark:hidden" />
      <MoonIcon className="hidden h-6 w-6 text-neutral-500 transition group-hover:text-neutral-200 dark:block" />
    </button>
  );
};
