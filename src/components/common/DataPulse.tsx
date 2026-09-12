import React from 'react';

interface DataPulseProps {
  statusText?: string;
  color?: 'green' | 'blue' | 'violet';
  size?: 'sm' | 'md';
}

export const DataPulse: React.FC<DataPulseProps> = ({
  statusText = 'ONLINE',
  color = 'green',
  size = 'sm',
}) => {
  const colorMap = {
    green: {
      dot: 'bg-[#00FF66]',
      ping: 'bg-[#00FF66]/60',
      text: 'text-[#00FF66]',
    },
    blue: {
      dot: 'bg-[#00E5FF]',
      ping: 'bg-[#00E5FF]/60',
      text: 'text-[#00E5FF]',
    },
    violet: {
      dot: 'bg-[#C084FC]',
      ping: 'bg-[#C084FC]/60',
      text: 'text-[#C084FC]',
    },
  };

  const selected = colorMap[color];
  const dotSize = size === 'sm' ? 'w-2 h-2' : 'w-2.5 h-2.5';

  return (
    <div className="inline-flex items-center gap-2">
      <span className="relative flex items-center justify-center">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${selected.ping}`} />
        <span className={`relative inline-flex rounded-full ${dotSize} ${selected.dot} shadow-[0_0_8px_currentColor]`} />
      </span>
      {statusText && (
        <span className={`text-[11px] font-mono font-bold tracking-wider ${selected.text}`}>
          {statusText}
        </span>
      )}
    </div>
  );
};
