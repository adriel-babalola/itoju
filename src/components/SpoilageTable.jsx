import React from 'react';
import { Export } from '@phosphor-icons/react';

export default function SpoilageTable() {
  const data = [
    { name: 'Amina Bello', weight: '450kg', crop: 'Tomato', stored: '18 days stored', shelfLife: '2 DAYS', action: 'TRIGGER DISPATCH', rowType: 'alert' },
    { name: 'Chukwu Okafor', weight: '120kg', crop: 'Leafy Veg', stored: '4 days stored', shelfLife: '5 DAYS', action: 'SCHEDULE', rowType: 'monitor' },
    { name: 'Fatima Usman', weight: '2100kg', crop: 'Onion', stored: '10 days stored', shelfLife: '45 DAYS', action: 'OPTIMAL', rowType: 'normal' },
    { name: 'Ibrahim Musa', weight: '320kg', crop: 'Tomato', stored: '2 days stored', shelfLife: '24 DAYS', action: 'OPTIMAL', rowType: 'normal' },
  ];

  return (
    <div className="bg-surface border border-borderPrimary p-8 h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-sm font-semibold text-textSecondary uppercase tracking-wider">ACTIVE RUNWAY & DISPATCH ALERTS</h3>
        <button className="flex items-center gap-2 bg-transparent text-textPrimary border border-borderPrimary px-4 py-2 text-[12px] font-sensor font-semibold hover:border-accent hover:text-accent hover:bg-accent/10 transition-all">
          <Export /> EXPORT
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[500px]">
          <thead>
            <tr>
              <th className="text-xs uppercase text-textSecondary pb-4 border-b border-borderPrimary font-semibold">Farmer</th>
              <th className="text-xs uppercase text-textSecondary pb-4 border-b border-borderPrimary font-semibold">Batch / Crop</th>
              <th className="text-xs uppercase text-textSecondary pb-4 border-b border-borderPrimary font-semibold">Shelflife</th>
              <th className="text-xs uppercase text-textSecondary pb-4 border-b border-borderPrimary font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className={`border-b border-borderPrimary last:border-b-0 ${row.rowType === 'alert' ? 'bg-alert/5 pulse-red-row' : row.rowType === 'monitor' ? 'bg-warning/5' : ''}`}>
                <td className="py-6 text-sm align-middle px-4">{row.name}</td>
                <td className="py-6 text-sm align-middle">
                  <strong>{row.weight}</strong> {row.crop}<br />
                  <span className="text-textSecondary text-[11px]">{row.stored}</span>
                </td>
                <td className="py-6 text-sm align-middle">
                  <span className={`font-sensor font-bold ${row.rowType === 'alert' ? 'text-alert' : row.rowType === 'monitor' ? 'text-warning' : 'text-accent'}`}>{row.shelfLife}</span>
                </td>
                <td className="py-6 text-sm align-middle pr-4">
                  {row.action === 'OPTIMAL' ? (
                     <span className="text-textSecondary text-xs">OPTIMAL</span>
                  ) : (
                     <button className={`bg-transparent px-3 py-1.5 text-xs font-sensor font-semibold border transition-all ${
                       row.rowType === 'alert' 
                         ? 'border-alert text-alert hover:bg-alert hover:text-bgPrimary'
                         : 'border-warning text-warning hover:bg-warning hover:text-bgPrimary'
                     }`}>
                       {row.action}
                     </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
