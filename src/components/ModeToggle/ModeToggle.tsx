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
      className="group rounded-full bg-white/90 px-3 py-2 ring-1 ring-gray-900/5 backdrop-blur transition dark:bg-gray-800/50 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={toggleMode}
    >
      <SunIcon className="h-6 w-6 text-gray-500 transition group-hover:text-blue-700 dark:hidden" />
      <MoonIcon className="hidden h-6 w-6 text-gray-500 transition group-hover:text-blue-400 dark:block" />
    </button>
  );
};
