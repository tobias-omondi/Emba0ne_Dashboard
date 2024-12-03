import { BarChart2, ImageIcon, MenuIcon, SettingsIcon, ShieldBanIcon, VideoIcon } from 'lucide-react';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SIDEBAR_ITEMS = [
  { name: "Overview", Icon: BarChart2, color: "#6366f1", path: "/" },
  { name: "Admin", Icon: ShieldBanIcon, color: "#Ec4899", path: "/admin" },
  { name: "Images", Icon: ImageIcon, color: "#F59E0d", path: "/images" },
  { name: "Videos", Icon: VideoIcon, color: "#000", path: "/videos" },
  { name: "Settings", Icon: SettingsIcon, color: "green", path: "/settings" },
];

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${isSidebarOpen ? 'w-64' : 'w-20'}`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="h-full bg-gray-200 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-100 border-x-fuchsia-700">
        {/* Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full hover:bg-gray-200 transition-colors max-w-fit"
        >
          <MenuIcon size={25} />
        </motion.button>

        {/* Sidebar Navigation */}
        <nav className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map((item) => (
            <Link key={item.path} to={item.path}>
              <motion.div
                className="flex items-center space-x-4 text-black hover:text-indigo-900 transition-colors mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <item.Icon color={item.color} size={20} />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-4 whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default SideBar;
