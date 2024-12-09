import React from 'react';
import { motion } from 'framer-motion';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from 'recharts';

const COLORS = ['#FF5733', '#33FF57', '#3357FF', '#F4C300'];

const SALES_DATA_CHANNEL = [
  { name: "Website", value: 5000 },
  { name: "Mobile App", value: 3000 },
  { name: "Marketplace", value: 4500 },
  { name: "Social Media", value: 2500 },
];

const SalesChanelChart = () => {
  return (
    <motion.div
      className="bg-gray-100 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-600">Sales Channel Distribution</h2>
      <div className="h-80 w-150">
        {/* Restricting maximum width and centering the chart */}
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={SALES_DATA_CHANNEL}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.5)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Bar dataKey="value" fill="#8884d8">
              {SALES_DATA_CHANNEL.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesChanelChart;
