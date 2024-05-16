import React from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Total Attendance Overview',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const LineChart = () => {
  return (
    <div className=' h-80 w-5/6 mb-4 bg-white rounded shadow-lg mr-4'>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
