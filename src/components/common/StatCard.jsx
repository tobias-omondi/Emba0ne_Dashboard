import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ name, icon: Icon, value, color }) => {
  return (
    <motion.div
      className="bg-gray-100 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-200"
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
    >
      <div className="px-4 py-5 sm:p-6">
        <span className="flex items-center text-sm font-medium text-gray-400">
          <Icon 
            size={20} 
            className="mr-2" 
            style={{ color }} 
          />
          {name}
        </span>
        <p className="mt-1 text-3xl font-semibold text-gray-700">{value}</p>
      </div>
    </motion.div>
  );
};

export default StatCard;
