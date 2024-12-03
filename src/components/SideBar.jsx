import { BarChart2, ImageIcon, MenuIcon, SettingsIcon, ShieldBanIcon, VideoIcon } from 'lucide-react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SIDEBAR_ITEMS = [
  { name: "Overview", Icon: BarChart2, color: "#6366f1", path: "/" },
  { name: "Admin", Icon: ShieldBanIcon, color: "#6366f1", path: "/admin" },
  { name: "Images", Icon: ImageIcon, color: "#6366f1", path: "/images" },
  { name: "Videos", Icon: VideoIcon, color: "#6366f1", path: "/videos" },
  { name: "Settings", Icon: SettingsIcon, color: "#6366f1", path: "/settings" },
];

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${isSidebarOpen ? 'w-64' : 'w-20'}`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
        {/* Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full hover:bg-gray-900 transition-colors max-w-fit"
        >
          <MenuIcon size={25} />
        </motion.button>

        {/* Sidebar Navigation */}
        <nav className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map((item) => (
            <Link key={item.path} to={item.path} className="flex items-center space-x-4 mb-4 text-white hover:text-indigo-500 transition-colors"
            >
              <item.Icon color={item.color} size={20} />
              {isSidebarOpen && <span>{item.name}</span>}
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default SideBar;
