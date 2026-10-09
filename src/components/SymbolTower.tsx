import React from 'react';
import { AxisResult } from '../types';

interface SymbolTowerProps {
  meaning: AxisResult; // roof (B or H)
  agency: AxisResult;  // band (S or A)
  judgment: AxisResult; // body (M or U)
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showLabels?: boolean;
}

const DIMENSIONS = {
  width: 74.3,
  roofHeight: 36.87,
  bandHeight: 18.76,
  bodyHeight: 51.21,
  totalHeight: 36.87 + 18.76 + 51.21, // 106.84
};

export const SymbolTower: React.FC<SymbolTowerProps> = ({
  meaning,
  agency,
  judgment,
  size = 'lg',
  showLabels = false,
}) => {
  const roofY = 0;
  const bandY = DIMENSIONS.roofHeight;
  const bodyY = DIMENSIONS.roofHeight + DIMENSIONS.bandHeight;

  const roofHref = `/brand/season-2-symbols/${meaning.code.toLowerCase()}${meaning.intensity}.svg`;
  const bandHref = `/brand/season-2-symbols/${agency.code.toLowerCase()}${agency.intensity}.svg`;
  const bodyHref = `/brand/season-2-symbols/${judgment.code.toLowerCase()}${judgment.intensity}.svg`;

  const sizeClasses = {
    sm: 'w-20',
    md: 'w-32',
    lg: 'w-48',
    xl: 'w-64',
  }[size];

  return (
    <div className="flex flex-col items-center">
      <div className={`relative ${sizeClasses} drop-shadow-2xl transition-all duration-300 hover:scale-[1.02]`}>
        <svg
          viewBox={`0 0 ${DIMENSIONS.width} ${DIMENSIONS.totalHeight}`}
          className="w-full h-auto filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
          role="img"
          aria-label="The Invisible Hand Symbol"
        >
          {/* Top Tier: Roof (Personal Dimension - Meaning vs Utility) */}
          <image
            href={roofHref}
            x={0}
            y={roofY}
            width={DIMENSIONS.width}
            height={DIMENSIONS.roofHeight}
          />
          {/* Middle Tier: Band (Social Dimension - Structure vs Ability) */}
          <image
            href={bandHref}
            x={0}
            y={bandY}
            width={DIMENSIONS.width}
            height={DIMENSIONS.bandHeight}
          />
          {/* Bottom Tier: Body (Ethical Dimension - Principles vs Results) */}
          <image
            href={bodyHref}
            x={0}
            y={bodyY}
            width={DIMENSIONS.width}
            height={DIMENSIONS.bodyHeight}
          />
        </svg>
      </div>

      {showLabels && (
        <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs text-neutral-400 font-mono tracking-wider w-full max-w-xs">
          <div className="bg-neutral-900/80 border border-neutral-800 rounded px-2 py-1">
            <span className="text-neutral-500 block text-[10px]">ROOF / 个人</span>
            <span className="text-white font-bold">{meaning.code}{meaning.intensity}</span>
          </div>
          <div className="bg-neutral-900/80 border border-neutral-800 rounded px-2 py-1">
            <span className="text-neutral-500 block text-[10px]">BAND / 社会</span>
            <span className="text-white font-bold">{agency.code}{agency.intensity}</span>
          </div>
          <div className="bg-neutral-900/80 border border-neutral-800 rounded px-2 py-1">
            <span className="text-neutral-500 block text-[10px]">BODY / 伦理</span>
            <span className="text-white font-bold">{judgment.code}{judgment.intensity}</span>
          </div>
        </div>
      )}
    </div>
  );
};
