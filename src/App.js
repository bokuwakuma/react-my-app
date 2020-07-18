import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LineChart, Line, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

const data = [
  {name: '4月', sales: 400, budget: 300},
  {name: '5月', sales: 300, budget: 250},
  {name: '6月', sales: 500, budget: 200},
  {name: '7月', sales: 100, budget: 600},
  {name: '8月', sales: 0, budget: 200},
  {name: '9月', sales: 0, budget: 600}
];

const renderLineChart = (
  <LineChart width={600} height={300} data={data}
    margin={{top: 30, right: 30,left: 30, bottom: 30}}>
    <Line type="monotone" dataKey="sales" stroke="#8848d8" />
    <Line type="monotone" dataKey="budget" stroke="#82ca9d" />
    // 枠線表示
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    // タイトル
    <Legend content="" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
);

const renderBarChart = (
  <BarChart width={600} height={300} data={data}
     margin={{top: 30, right: 30, left: 30, bottom: 30}}>
    <Bar dataKey="sales" fill="#8848d8" />
    <Bar dataKey="budget" fill="#82ca9d" />
    // 枠線表示
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    // タイトル
    <Legend />
    <XAxis dataKey="name" />
    <YAxis />
  </BarChart>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Orchestra</h1>
        <h2>
          売上管理
        </h2>
        <div className="line-chart">
          {renderLineChart}
        </div>
        <div className="bar-chart">
          {renderBarChart}
        </div>
        <h2>
          稼働管理
        </h2>
        <div className="">
          
        </div>
      </header>
    </div>
  );
}

export default App;
