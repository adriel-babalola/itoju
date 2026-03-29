import React, { useEffect, useState } from 'react';

export const AnimateNum = ({ end, decimals = 0, duration = 2500 }) => {
  const [val, setVal] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    let animationFrameId;
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 4);
      let current = (easeOut * end);
      setVal(current);
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };
    
    // slight delay for first paint
    setTimeout(() => {
        animationFrameId = window.requestAnimationFrame(step);
    }, 100);
    
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [end, duration]);

  return <span>{val.toFixed(decimals)}</span>;
};

export default function ChamberCard({ title, image, temp, humidity, ethylene, batch, shelfLife, valve, fan, load }) {
  const badgeColors = {
    'OPTIMAL': 'text-accent border-accent bg-accent/10',
    'MONITOR': 'text-warning border-warning bg-warning/10',
    'ALERT': 'text-alert border-alert bg-alert/10',
  };

  const fillColors = {
    'normal': 'bg-accent',
    'amber': 'bg-warning',
    'alert': 'bg-alert',
  };

  return (
    <div className="bg-surface border border-accent/20 shadow-[0_0_15px_rgba(46,204,113,0.05)] relative flex flex-col min-h-[500px]">
      <div 
        className="h-[140px] bg-borderPrimary bg-cover bg-center relative border-b border-borderPrimary shrink-0"
        style={{ backgroundImage: `url('${image}')`, backgroundPosition: 'top center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface" />
        <h3 className="absolute bottom-4 left-8 z-10 text-xl font-bold text-textPrimary tracking-wide">{title}</h3>
      </div>
      
      <div className="p-8 flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <div className="text-[13px] text-textSecondary uppercase">TEMPERATURE</div>
          <div className="text-right">
            <div className={`font-sensor text-2xl font-bold flex items-baseline gap-1 justify-end ${temp.color === 'amber' ? 'text-warning' : ''}`}>
              <AnimateNum end={parseFloat(temp.current)} decimals={1} />
              <span className="text-sm font-ui font-normal text-textSecondary">°C</span>
            </div>
            <div className="font-sensor text-[11px] text-textSecondary">Target: {temp.target}°C</div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="text-[13px] text-textSecondary uppercase">HUMIDITY</div>
          <div className="text-right">
            <div className="font-sensor text-2xl font-bold flex items-baseline gap-1 justify-end">
              <AnimateNum end={parseFloat(humidity.current)} />
              <span className="text-sm font-ui font-normal text-textSecondary">%</span>
            </div>
            <div className="font-sensor text-[11px] text-textSecondary">Target: {humidity.target}%</div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="text-[13px] text-textSecondary uppercase">ETHYLENE</div>
          <div className={`text-[11px] font-bold px-2 py-1 border ${badgeColors[ethylene.status]}`}>
            {ethylene.status}: {ethylene.val} ppm
          </div>
        </div>
        
        <div className="mt-1 mb-5">
          <div className="flex justify-between text-[13px] text-textSecondary mb-1.5">
            <span>Shelf Life: Batch {batch}</span>
            <span className={`font-sensor ${shelfLife.color === 'alert' ? 'text-alert' : shelfLife.color === 'amber' ? 'text-warning' : 'text-accent'}`}>{shelfLife.text}</span>
          </div>
          <div className="h-1.5 bg-borderPrimary overflow-hidden">
            <div className={`h-full ${fillColors[shelfLife.color || 'normal']} transition-all duration-1000 ease-out`} style={{ width: `${shelfLife.pcn}%` }}></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 border-t border-borderPrimary pt-4 mt-auto">
          <div>
            <div className="text-[13px] text-textSecondary uppercase">SOLENOID VALVE</div>
            <div className={`font-sensor text-[13px] ${valve === 'OPEN' ? 'text-accent' : 'text-textSecondary'}`}>{valve}</div>
          </div>
          <div>
            <div className="text-[13px] text-textSecondary uppercase">EVAP FAN</div>
            <div className="font-sensor text-[13px] text-textPrimary">
              {fan !== 'OFF' ? <><AnimateNum end={parseFloat(fan)} /> RPM</> : 'OFF'}
            </div>
          </div>
          <div className="col-span-2 mt-1">
            <div className="text-[13px] text-textSecondary uppercase">CHAMBER LOAD</div>
            <div className="font-sensor text-[13px] text-textPrimary"><AnimateNum end={parseFloat(load.current)} /> / {load.max} kg</div>
          </div>
        </div>
      </div>
    </div>
  );
}
