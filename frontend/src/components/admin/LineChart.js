import React from 'react';
import Chart from 'chart.js/auto';
import { Bar, Line } from 'react-chartjs-2';
Bar;

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
    <div className='mb-4 w-80 h-48 md:h-[270px] md:min-w-80 lg:min-w-[511px] bg-white rounded shadow-md md:ml-4'>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
