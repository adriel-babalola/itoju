import React from 'react';
import { AirplaneTilt } from '@phosphor-icons/react';

const DroneCard = ({ id, status, desc, progress, battery, active, color, isCharging }) => (
  <div className={`bg-bgPrimary border ${active ? 'border-accent' : 'border-borderPrimary'} p-6 flex items-center gap-6`}>
    <AirplaneTilt size={36} weight="fill" className={active ? 'text-accent' : 'text-textSecondary'} />
    <div className="flex-1">
      <h4 className={`font-sensor text-[15px] mb-1.5 ${!active && !isCharging ? 'text-textSecondary' : ''}`}>{id} ({status})</h4>
      <p className="text-[13px] text-textSecondary">{desc}</p>
      <div className="h-1.5 bg-borderPrimary overflow-hidden mt-4">
        <div className={`h-full ${color}`} style={{ width: `${progress}%` }}></div>
      </div>
    </div>
    <div className="text-right ml-4">
      <div className={`font-sensor font-bold text-2xl ${active ? '' : isCharging ? 'text-warning' : 'text-accent'}`}>{battery}%</div>
      <div className="text-xs text-textSecondary uppercase mt-1">Batt</div>
    </div>
  </div>
);

export default function DroneFleet() {
  return (
    <div className="bg-surface border border-borderPrimary p-8">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-[14px] font-semibold text-textSecondary uppercase tracking-widest">DRONE LOGISTICS FLEET</h3>
        <div className="text-[13px] text-accent flex items-center gap-2">
          <span className="w-2 h-2 bg-accent rounded-full inline-block pulse-green"></span> 
          1 FLEET ACTIVE
        </div>
      </div>
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
         <DroneCard id="ITJ-DRN-01" status="IN FLIGHT" desc="Delivery: Zaria Market (Est. 14 mins)" progress={78} battery={78} active={true} color="bg-accent" />
         <DroneCard id="ITJ-DRN-02" status="CHARGING" desc="Next: 14:00 (Amina Bello dispatch)" progress={42} battery={42} active={false} isCharging={true} color="bg-warning" />
         <DroneCard id="ITJ-DRN-03" status="IDLE" desc="Ready for deployment" progress={100} battery={100} active={false} color="bg-accent" />
      </div>
    </div>
  );
}
