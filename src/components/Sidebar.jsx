import React from 'react';
import { SquaresFour, ThermometerCold, Package, Truck, AirplaneTilt, Users, ChartLineUp, ShieldCheck, Gear } from '@phosphor-icons/react';

const NavItem = ({ icon: Icon, label, active }) => (
  <a href="#" className={`flex items-center gap-5 px-10 py-4 font-medium transition-all duration-200 border-l-4 ${
    active 
      ? 'text-accent bg-accent/10 border-accent' 
      : 'text-textSecondary border-transparent hover:text-textPrimary hover:bg-accent/5 hover:border-accent/30'
  }`}>
    <Icon size={24} />
    {label}
  </a>
);

export default function Sidebar() {
  return (
    <aside className="w-[280px] bg-bgPrimary border-r border-borderPrimary py-10 flex flex-col gap-3 shrink-0 h-screen sticky top-0 overflow-y-auto hidden lg:flex">
      <NavItem icon={SquaresFour} label="Overview" active={true} />
      <NavItem icon={ThermometerCold} label="Chambers" />
      <NavItem icon={Package} label="Inventory" />
      <NavItem icon={Truck} label="Dispatch" />
      <NavItem icon={AirplaneTilt} label="Drone Fleet" />
      <NavItem icon={Users} label="Farmers" />
      <NavItem icon={ChartLineUp} label="Analytics" />
      <NavItem icon={ShieldCheck} label="Policy Reports" />
      <div className="flex-grow"></div>
      <NavItem icon={Gear} label="Settings" />
    </aside>
  );
}
