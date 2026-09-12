import React from 'react';
import { DataPulse } from '../common/DataPulse';
import { siteConfig } from '../../data/siteConfig';

export const SystemStatusBar: React.FC = () => {
  const capabilities = [
    'WEB DEVELOPMENT',
    'WOOCOMMERCE',
    'SHOPIFY',
    'ANDROID APPLICATIONS',
    'AI INTEGRATIONS',
    'SEO SYSTEMS',
    'BUSINESS AUTOMATION',
    'DROPSHIPPING PLATFORMS',
    'PAYFAST & OZOW CONNECTED',
  ];

  return (
    <div className="w-full bg-[#0B0D12] border-y border-gray-800/90 py-3 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar scroll-smooth whitespace-nowrap text-xs font-mono">
          {/* Status badge */}
          <div className="flex items-center gap-2 flex-shrink-0 pr-4 border-r border-gray-800">
            <DataPulse statusText="SYSTEM ONLINE" color="green" size="sm" />
            <span className="text-[11px] text-gray-500">· REGION: ZA</span>
          </div>

          {/* Capabilities items */}
          <div className="flex items-center gap-6 text-gray-300">
            {capabilities.map((item, index) => (
              <React.Fragment key={item}>
                <span className="flex items-center gap-2 text-gray-300 hover:text-[#00E5FF] transition-colors cursor-default">
                  <span className="w-1.5 h-1.5 bg-[#00E5FF] rounded-full inline-block shadow-[0_0_6px_#00E5FF]" />
                  <span className="font-semibold tracking-wider">{item}</span>
                </span>
                {index < capabilities.length - 1 && (
                  <span className="text-gray-700 font-mono">/</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="flex-shrink-0 pl-4 border-l border-gray-800 text-[10px] text-gray-500 font-mono">
            BUILD: {siteConfig.buildVersion}
          </div>
        </div>
      </div>
    </div>
  );
};
