import React from 'react';

interface LoadingSkeletonProps {
  type?: 'card' | 'text' | 'image' | 'metrics';
  className?: string;
  count?: number;
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  type = 'card',
  className = '',
  count = 1,
}) => {
  const renderItem = (index: number) => {
    if (type === 'text') {
      return (
        <div key={index} className={`space-y-2.5 animate-pulse ${className}`}>
          <div className="h-4 bg-gray-800/60 rounded-xs w-3/4 border-l-2 border-[#00E5FF]/40" />
          <div className="h-3 bg-gray-850/40 rounded-xs w-full" />
          <div className="h-3 bg-gray-850/40 rounded-xs w-5/6" />
        </div>
      );
    }

    if (type === 'metrics') {
      return (
        <div
          key={index}
          className={`relative p-4 border border-gray-800 bg-[#0B0D12] overflow-hidden rounded-xs ${className}`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00E5FF]/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
          <div className="h-3 bg-gray-800 w-1/3 mb-3" />
          <div className="h-7 bg-gray-800/80 w-2/3 mb-2" />
          <div className="h-2 bg-gray-800/40 w-1/2" />
        </div>
      );
    }

    return (
      <div
        key={index}
        className={`relative p-5 border border-gray-800/80 bg-[#0B0D12]/80 overflow-hidden rounded-xs flex flex-col justify-between ${className}`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A855F7]/5 to-transparent -translate-x-full animate-[shimmer_2.5s_infinite]" />
        
        {/* Top tech header */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-850">
          <div className="h-2.5 bg-gray-800 w-24 rounded-xs" />
          <div className="h-2 bg-gray-850 w-12 rounded-xs" />
        </div>

        {/* Center content */}
        <div className="space-y-3 mb-6">
          <div className="h-6 bg-gray-800/90 w-4/5 rounded-xs" />
          <div className="h-3.5 bg-gray-850/60 w-full rounded-xs" />
          <div className="h-3.5 bg-gray-850/60 w-3/4 rounded-xs" />
        </div>

        {/* Bottom tags & button */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-850">
          <div className="flex gap-2">
            <div className="h-4 bg-gray-800/50 w-14 rounded-xs" />
            <div className="h-4 bg-gray-800/50 w-16 rounded-xs" />
          </div>
          <div className="h-7 bg-gray-800/70 w-24 rounded-xs" />
        </div>
      </div>
    );
  };

  return (
    <div className="grid gap-4 w-full">
      {Array.from({ length: count }).map((_, i) => renderItem(i))}
    </div>
  );
};
