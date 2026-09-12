import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center bg-[#0B0D12]/80 border border-gray-800 hover:border-gray-700 rounded-xs p-0.5 font-mono text-[10px]">
      <div className="px-1.5 py-0.5 text-gray-500 hidden sm:flex items-center gap-1">
        <Globe className="w-3 h-3 text-[#00E5FF]" />
      </div>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded-xs transition-all cursor-pointer ${
          language === 'en'
            ? 'bg-[#00E5FF] text-black font-bold shadow-[0_0_10px_rgba(0,229,255,0.4)]'
            : 'text-gray-400 hover:text-white'
        }`}
        title="Switch to English"
        aria-label="Switch language to English"
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage('af')}
        className={`px-2 py-1 rounded-xs transition-all cursor-pointer ${
          language === 'af'
            ? 'bg-[#A855F7] text-white font-bold shadow-[0_0_10px_rgba(168,85,247,0.4)]'
            : 'text-gray-400 hover:text-white'
        }`}
        title="Skakel na Afrikaans"
        aria-label="Skakel taal na Afrikaans"
      >
        AF
      </button>
    </div>
  );
};
