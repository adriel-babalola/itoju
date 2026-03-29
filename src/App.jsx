import React from 'react';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import ChamberCard from './components/ChamberCard';
import MetricCard from './components/MetricCard';
import SpoilageTable from './components/SpoilageTable';
import ProductionChart from './components/ProductionChart';
import DroneFleet from './components/DroneFleet';
import RightPanel from './components/RightPanel';
import { TrendUp, Warning, CheckCircle } from '@phosphor-icons/react';

export default function App() {
  return (
    <div className="flex bg-bgPrimary text-textPrimary font-ui min-h-screen selection:bg-accent/30 selection:text-accent">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 p-8 lg:p-12">
          <div className="grid grid-cols-1 2xl:grid-cols-12 gap-10">
            <div className="2xl:col-span-8 flex flex-col gap-10">
              
              {/* Chambers Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ChamberCard 
                  title="TOMATO — CH 01"
                  image="/images/tomatoes.webp"
                  temp={{ current: '12.4', target: '12.0' }}
                  humidity={{ current: '88', target: '85-90' }}
                  ethylene={{ status: 'ALERT', val: '14.2' }}
                  batch="T-402"
                  shelfLife={{ text: '2 Days Left', pcn: 15, color: 'alert' }}
                  valve="OPEN"
                  fan="1450"
                  load={{ current: '2450', max: '5000' }}
                />
                <ChamberCard 
                  title="ONION — CH 02"
                  image="/images/onions.jpg"
                  temp={{ current: '2.5', target: '2.0' }}
                  humidity={{ current: '65', target: '65-70' }}
                  ethylene={{ status: 'OPTIMAL', val: '0.1' }}
                  batch="O-118"
                  shelfLife={{ text: '45 Days Left', pcn: 80, color: 'normal' }}
                  valve="CLOSED"
                  fan="OFF"
                  load={{ current: '4100', max: '5000' }}
                />
                <ChamberCard 
                  title="LEAFY VEG — CH 03"
                  image="/images/vegitables.jpg"
                  temp={{ current: '4.8', target: '2.0', color: 'amber' }}
                  humidity={{ current: '95', target: '95-98' }}
                  ethylene={{ status: 'MONITOR', val: '3.5' }}
                  batch="L-882"
                  shelfLife={{ text: '5 Days Left', pcn: 35, color: 'amber' }}
                  valve="OPEN"
                  fan="1800"
                  load={{ current: '840', max: '2000' }}
                />
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <MetricCard title="TOTAL INVENTORY" value="7390" unit="kg" trendText="+450kg today" type="normal" />
                <MetricCard title="SPOILAGE RISK BATCHES" value="3" unit="" trendText="Action required" type="alert" />
                <MetricCard title="DISPATCHES (THIS WEEK)" value="24" unit="" trendText="100% Fulfillment" type="success" />
                <MetricCard title="REVENUE RECOVERED" overrideValueStr="₦{v}M" value="4.2" decimals={1} unit="" trendText="YTD Estimate" type="normal" />
              </div>

              {/* Charts & Tables */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <SpoilageTable />
                <ProductionChart />
              </div>

              {/* Drones */}
              <DroneFleet />

            </div>

            {/* Right Stack */}
            <div className="2xl:col-span-4">
               <RightPanel />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
