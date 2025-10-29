
import React from 'react';
import ThemeSwitcher from './ThemeSwitcher.tsx';
import type { Theme } from '../App.tsx';

interface HeaderProps {
  title: string;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const Header: React.FC<HeaderProps> = ({ title, theme, setTheme }) => {
  return (
    <header className="flex-shrink-0 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-neutral-700 p-4 md:p-6 flex justify-between items-center shadow-sm z-10">
      <h1 className="text-2xl md:text-3xl font-bold font-sans text-gray-900 dark:text-neutral-100">{title}</h1>
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
    </header>
  );
};

export default Header;