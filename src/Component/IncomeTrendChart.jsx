// src/components/IncomeTrendChart.jsx
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const IncomeTrendChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        type: "bar",
        label: "Income",
        data: [4000, 5000, 6500, 3000, 5000],
        backgroundColor: "#7E2CC2",
        yAxisID: "y-income",
        borderRadius: 8,
      },
      {
        type: "line",
        label: "momGrowth",
        data: [20, 40, 30, -20, 60],
        borderColor: "#8B0000",
        backgroundColor: "#8B0000",
        fill: false,
        yAxisID: "y-growth",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            if (context.dataset.label === "Income") {
              return `$${context.parsed.y.toLocaleString()}`;
            }
            if (context.dataset.label === "momGrowth") {
              return `${context.parsed.y}%`;
            }
          },
        },
      },
    },
    scales: {
      "y-income": {
        type: "linear",
        position: "left",
        title: {
          display: true,
          text: "Income ($k)",
        },
        ticks: {
          callback: function (value) {
            return `$${value / 1000}k`;
          },
        },
      },
      "y-growth": {
        type: "linear",
        position: "right",
        title: {
          display: true,
          text: "Growth (%)",
        },
        ticks: {
          callback: function (value) {
            return `${value}%`;
          },
        },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md mt-6 border border-gray-300 h-80">
      <h3 className="text-gray-600 text-lg font-medium mb-2">Income Trend</h3>
      <p className="text-gray-500 text-sm mb-4">
        Your monthly income and growth for the last 6 months.
      </p>
      <div className="h-[200px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default IncomeTrendChart;
