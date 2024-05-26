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
    <div className='mb-4 w-72 h-48 md:ml-16 md:w-3/6 md:h-72 md:p-4 bg-white rounded shadow-md md:mr-6'>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
