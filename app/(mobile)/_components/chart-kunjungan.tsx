"use client";

import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    kunjungan: 81,
  },
  {
    name: "Feb",
    kunjungan: 163,
  },
  {
    name: "Mar",
    kunjungan: 310,
  },
  {
    name: "Apr",
    kunjungan: 212,
  },
  {
    name: "Mei",
    kunjungan: 180,
  },
  {
    name: "Jun",
    kunjungan: 120,
  },
  {
    name: "Jul",
    kunjungan: 200,
  },
  {
    name: "Agu",
    kunjungan: 250,
  },
  {
    name: "Sep",
    kunjungan: 300,
  },
  {
    name: "Okt",
    kunjungan: 350,
  },
  {
    name: "Nov",
    kunjungan: 400,
  },
  {
    name: "Des",
    kunjungan: 450,
  },
];

export default function Example() {
  return (
    <div className="h-64 m-4 border rounded-md shadow-sm p-2">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity="0" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="kunjungan"
            fill="#3b82f6"
            // activeBar={<Rectangle fill="#2563eb" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
