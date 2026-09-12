import React from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { ThemeMode } from '../../types';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    const modes: ThemeMode[] = ['dark', 'light', 'system'];
    const nextIndex = (modes.indexOf(theme) + 1) % modes.length;
    setTheme(modes[nextIndex]);
  };

  return (
    <button
      onClick={cycleTheme}
      className="relative p-2 text-gray-400 hover:text-[#00E5FF] transition-colors border border-gray-800 hover:border-[#00E5FF]/50 bg-[#0B0D12]/60 rounded-xs cursor-pointer group"
      title={`Theme: ${theme.toUpperCase()} (Click to cycle)`}
      aria-label="Toggle visual theme"
    >
      {theme === 'dark' && <Moon className="w-4 h-4 text-[#00E5FF] drop-shadow-[0_0_8px_rgba(0,229,255,0.7)]" />}
      {theme === 'light' && <Sun className="w-4 h-4 text-amber-400" />}
      {theme === 'system' && <Monitor className="w-4 h-4 text-purple-400" />}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};
