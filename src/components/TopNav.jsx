import React, { useState, useEffect } from 'react';
import { Leaf, Bell } from '@phosphor-icons/react';

export default function TopNav() {
  const [time, setTime] = useState('--:--:--');

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="h-[88px] bg-surface border-b border-borderPrimary flex items-center justify-between px-10 sticky top-0 z-10 shrink-0">
      <div className="flex items-center gap-3 text-2xl font-bold tracking-wide text-textPrimary lg:hidden">
        <Leaf weight="fill" className="text-accent" size={32} />
        ITOJU
      </div>
      
      <div className="hidden lg:flex items-center gap-3 text-2xl font-bold tracking-wide text-textPrimary w-[240px]">
         {/* Kept empty or brand matching sidebar width for alignment */}
         <Leaf weight="fill" className="text-accent" size={32} />
         ITOJU
      </div>

      <div className="hidden md:flex flex-1 items-center gap-8 ml-8">
        <div className="flex items-center gap-3 font-medium text-textSecondary">
            <div className="w-2.5 h-2.5 bg-accent rounded-full pulse-green"></div>
            Kaduna Hub 01 — ACTIVE
        </div>

        <div className="font-sensor text-sm text-textSecondary tracking-wider">
            LAST SYNC: <span>{time}</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative cursor-pointer group">
          <Bell size={28} className="text-textSecondary group-hover:text-textPrimary transition-colors" />
          <span className="absolute -top-1 -right-1 bg-alert text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-surface">3</span>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="hidden sm:block text-right">
            <div className="text-sm font-semibold">Farouk Abubakar</div>
            <div className="text-xs text-textSecondary">Hub Manager</div>
          </div>
          <div 
            className="w-10 h-10 bg-borderPrimary border border-accent bg-cover bg-top"
            style={{ backgroundImage: "url('/images/portrait-countryside-worker-posing.jpg')" }}
          ></div>
        </div>
      </div>
    </header>
  );
}
