import React from 'react';
import { LineChart, Line, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, XAxis } from 'recharts';
import { motion } from 'framer-motion';

const salesData = [
  { name: "Jan", sales: 3200 },
  { name: "Feb", sales: 2800 },
  { name: "Mar", sales: 4500 },
  { name: "Apr", sales: 5000 },
  { name: "May", sales: 6200 },
  { name: "Jun", sales: 4800 },
  { name: "Jul", sales: 4300 },
  { name: "Aug", sales: 5100 },
  { name: "Sep", sales: 4700 },
  { name: "Oct", sales: 5300 },
  { name: "Nov", sales: 4900 },
  { name: "Dec", sales: 5600 },
];

const SalesOverview = () => {
  return (
    <motion.div
      className="bg-gray-100 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-500">Sales Overview</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey="name" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.5)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#6366F1"
              dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesOverview;
