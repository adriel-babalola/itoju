import React, { useRef, useEffect, useState } from 'react';
import { DotsThreeOutline } from '@phosphor-icons/react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ProductionChart() {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          font: { size: 12, family: "'Inter', sans-serif" },
          color: '#81C784'
        }
      },
      tooltip: {
        backgroundColor: '#112216',
        titleColor: '#E8F5E9',
        bodyColor: '#E8F5E9',
        borderColor: '#1B3624',
        borderWidth: 1,
        padding: 12,
        callbacks: {
          title: (context) => context[0].label + ' 2026',
          label: (context) => ` ${context.dataset.label}: ${context.raw} kg`
        }
      }
    },
    scales: {
      x: {
        stacked: true,
        grid: { display: false, drawBorder: false },
        ticks: { font: { size: 11, family: "'Inter', sans-serif" }, color: '#81C784' }
      },
      y: {
        stacked: true,
        grid: { color: '#1B3624', drawBorder: false },
        ticks: { font: { family: "'JetBrains Mono', monospace", size: 11 }, color: '#81C784' }
      }
    }
  };

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;

    const ctx = chart.ctx;
    const gradientStored = ctx.createLinearGradient(0, 0, 0, 400);
    gradientStored.addColorStop(0, '#2ECC71');
    gradientStored.addColorStop(1, 'rgba(46, 204, 113, 0.2)');

    const gradientLost = ctx.createLinearGradient(0, 0, 0, 400);
    gradientLost.addColorStop(0, '#E74C3C');
    gradientLost.addColorStop(1, 'rgba(231, 76, 60, 0.2)');

    setChartData({
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      datasets: [
        {
          label: 'Produce Stored (kg)',
          data: [1200, 1400, 2200, 1800, 3100, 2400, 1900, 2800, 2100, 2900],
          backgroundColor: gradientStored,
          borderRadius: 4,
          barPercentage: 0.6,
          categoryPercentage: 0.8
        },
        {
          label: 'Produce Lost (kg)',
          data: [200, 150, 400, 250, 300, 180, 150, 400, 150, 200],
          backgroundColor: gradientLost,
          borderRadius: 4,
          barPercentage: 0.6,
          categoryPercentage: 0.8
        }
      ]
    });
  }, []);

  return (
    <div className="bg-surface border border-borderPrimary p-8 h-full flex flex-col min-h-[440px]">
      <div className="flex justify-between items-center mb-6 shrink-0">
        <h3 className="text-sm font-semibold text-textSecondary uppercase tracking-wider">PRODUCTION CONSERVATION SUMMARY</h3>
        <button className="text-textSecondary hover:text-textPrimary transition-colors">
          <DotsThreeOutline size={24} weight="fill" />
        </button>
      </div>
      <div className="flex-1 w-full min-h-[250px] relative">
        <Bar ref={chartRef} options={options} data={chartData} />
      </div>
    </div>
  );
}
