// // src/components/BarChart.js
// import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
// import { Pie } from 'recharts';
// // Sample data
// const data = [
//   { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
//   { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
//   { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
//   { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
//   { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
//   { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
//   { name: 'Jul', uv: 3490, pv: 7300, amt: 2100 },
// ];

// const SimpleBarChart = () => (
//   <BarChart width={600} height={300} data={data}>
//     <CartesianGrid strokeDasharray="3 3" />
//     <XAxis dataKey="name" />
//     <YAxis />
//     <Tooltip />
//     <Legend />
//     <Bar dataKey="uv" fill="#8884d8" />
//     <Bar dataKey="pv" fill="#82ca9d" />
//   </BarChart>
// );

// export default SimpleBarChart;

// ======================== =====////==== ===========================

// src/components/PieChartComponent.js
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

// Sample data
const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

// Define colors for the pie slices
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieChartComponent = () => (
  <PieChart width={400} height={400}>
    <Pie
      data={data}
      cx={200} // Center x position
      cy={200} // Center y position
      outerRadius={150} // Radius of the pie chart
      fill="#8884d8"
      dataKey="value"
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip />
    <Legend />
  </PieChart>
);

export default PieChartComponent;

