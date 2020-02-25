import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: '10', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: '20', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: '30', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: '40', uv: 2780, pv: 3908, amt: 2000,
  },
  
];

export default class BarChart1 extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/q4eonc12/';

  render() {
    return (
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#343e57" background={{ fill: '#eee' }} />
        <Bar dataKey="uv" fill="#c2f7f1" />
      </BarChart>
    );
  }
}
