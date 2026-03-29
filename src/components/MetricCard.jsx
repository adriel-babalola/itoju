import React from 'react';
import { TrendUp, Warning, CheckCircle } from '@phosphor-icons/react';
import { AnimateNum } from './ChamberCard';

export default function MetricCard({ title, value, decimals = 0, unit, trendText, type, overrideValueStr = null }) {
  let Icon = TrendUp;
  let borderColor = 'border-l-accent';
  let valColor = 'text-textPrimary';
  let trendColor = 'text-accent';

  if (type === 'alert') {
    Icon = Warning;
    borderColor = 'border-l-alert';
    valColor = 'text-alert';
    trendColor = 'text-alert';
  } else if (type === 'success') {
    Icon = CheckCircle;
  }

  return (
    <div className={`bg-surface border border-borderPrimary p-8 border-l-2 ${borderColor}`}>
      <div className="text-[14px] font-semibold text-textSecondary uppercase tracking-widest">{title}</div>
      <div className={`font-sensor text-[40px] font-bold mt-4 mb-2 ${valColor}`}>
        {overrideValueStr ? <span>{overrideValueStr.split('{v}')[0]}<AnimateNum end={parseFloat(value)} decimals={decimals} />{overrideValueStr.split('{v}')[1]}</span> : <AnimateNum end={parseFloat(value)} decimals={decimals} />} <span className="text-xl font-ui text-textSecondary">{unit}</span>
      </div>
      <div className={`text-[14px] flex items-center gap-2 ${trendColor}`}>
        <Icon weight="bold" size={18} /> {trendText}
      </div>
    </div>
  );
}
