import React from 'react';
import { Sun, Drop, SolarPanel, BatteryCharging, DeviceMobile } from '@phosphor-icons/react';
import { AnimateNum } from './ChamberCard';

const WeatherCard = ({ icon: Icon, val, dec = 0, unit, label }) => (
  <div className="bg-bgPrimary p-5 border border-borderPrimary text-center">
    <Icon weight="fill" size={28} className="text-accent mx-auto mb-2" />
    <div className="font-sensor text-[22px] font-bold mb-1">
       <AnimateNum end={parseFloat(val)} decimals={dec} />{unit}
    </div>
    <div className="text-xs text-textSecondary">{label}</div>
  </div>
);

const FarmerRow = ({ name, type, active, rev, avatar, customColor }) => (
  <div className="flex justify-between items-center py-6 border-b border-borderPrimary last:border-0">
    <div className="flex items-center gap-4">
      <div 
        className="w-12 h-12 rounded-full border border-borderPrimary bg-cover bg-center shrink-0" 
        style={avatar ? { backgroundImage: `url('${avatar}')` } : { backgroundColor: customColor }}
      ></div>
      <div>
        <div className="font-semibold text-[15px]">{name}</div>
        <div className="text-[13px] text-textSecondary mt-1">{type}</div>
      </div>
    </div>
    <div className="text-right font-sensor text-[14px] mr-4">
      <div>{active} kg active</div>
      <div className="text-accent text-[13px] mt-1">Est. {rev}</div>
    </div>
    <button className="flex items-center gap-1.5 bg-transparent text-textPrimary border border-borderPrimary px-3 py-2 text-[13px] font-semibold hover:border-accent hover:text-accent transition-colors">
      <DeviceMobile size={16} /> USSD
    </button>
  </div>
);

export default function RightPanel() {
  return (
    <div className="flex flex-col gap-10 h-full">
      {/* Weather & Energy */}
      <div className="bg-surface border border-borderPrimary p-8 pb-10">
        <h3 className="text-[14px] font-semibold text-textSecondary uppercase tracking-widest mb-8">KADUNA MICROCLIMATE & ENERGY</h3>
        <div className="grid grid-cols-2 gap-4">
          <WeatherCard icon={Sun} val="34" unit="°C" label="Ambient Temp" />
          <WeatherCard icon={Drop} val="42" unit="%" label="Humidity Outside" />
          <WeatherCard icon={SolarPanel} val="12.4" dec={1} unit="kW" label="Solar Gen (Now)" />
          <WeatherCard icon={BatteryCharging} val="88" unit="%" label="~14h Autonomy" />
        </div>
      </div>

      {/* Farmer Network */}
      <div className="bg-surface border border-borderPrimary flex-1 p-8 flex flex-col">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-[14px] font-semibold text-textSecondary uppercase tracking-widest">FARMER NETWORK</h3>
          <span className="bg-alert text-white text-[12px] font-bold px-2 py-1 tracking-wider">24 ACTIVE</span>
        </div>
        
        <div className="flex flex-col gap-2">
          <FarmerRow name="Amina Bello" type="Tomato Farm (Zaria)" active="450" rev="₦240k" avatar="/images/countryside-women-out-field-posing.jpg" />
          <FarmerRow name="Chukwu Okafor" type="Leafy Veg (Kachia)" active="120" rev="₦45k" avatar="/images/portrait-countryside-worker-posing.jpg" />
          <FarmerRow name="Fatima Usman" type="Onion Collective" active="2,100" rev="₦1.2M" customColor="#2c3e50" />
          <FarmerRow name="Ibrahim Musa" type="Tomato Farm" active="320" rev="₦180k" customColor="#34495e" />
        </div>

        <button className="w-full mt-auto pt-6 text-sm font-semibold tracking-wider text-textPrimary hover:text-accent transition-colors uppercase border-t border-borderPrimary mt-6 flex justify-center py-4 bg-bgPrimary/50 hover:bg-bgPrimary">
          VIEW ALL 24 FARMERS
        </button>
      </div>
    </div>
  );
}
