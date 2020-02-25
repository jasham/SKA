import React, { PureComponent } from 'react';
import {
  ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    name: 'Page A', uv: 590, pv: 800, amt: 1400,
  },
  {
    name: 'Page B', uv: 868, pv: 967, amt: 1506,
  },
  {
    name: 'Page C', uv: 397, pv: 198, amt: 989,
  },
  {
    name: 'Page D', uv: 480, pv: 200, amt: 1228,
  },
  {
    name: 'Page E', uv: 520, pv: 108, amt: 1100,
  },
  {
    name: 'Page F', uv: 400, pv: 680, amt: 1700,
  },
];

export default class Example1 extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/94sebfL8/';

  render() {
    return (
      <ComposedChart
        width={100}
        height={100}
        data={data}
        margin={{
          top: 0, right: 0, bottom: 0, left: 0,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="none" />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="uv" barSize={5} fill="#c7f2fb" />
        <Line type="monotone" dataKey="uv" stroke="#00dec5 " />
      </ComposedChart>
    );
  }
}
