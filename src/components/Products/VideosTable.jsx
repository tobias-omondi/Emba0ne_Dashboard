import React, { useState } from 'react';
import { Search, Edit, Trash2 } from 'lucide-react'; // Ensure you have these icons
import { motion } from 'framer-motion';

const VIDEO_DATA = [
  { id: 1, url: 'https://example.com/video1.mp4', name: 'Video 1', posted_date: '2024-12-09' },
  { id: 2, url: 'https://example.com/video2.mp4', name: 'Video 2', posted_date: '2024-12-08' },
  { id: 3, url: 'https://example.com/video3.mp4', name: 'Video 3', posted_date: '2024-12-07' },
  { id: 4, url: 'https://example.com/video4.mp4', name: 'Video 4', posted_date: '2024-12-06' },
];

const VideosTable = () => {
  const [searchItem, setSearchItem] = useState('');
  const [filteredVideos, setFilteredVideos] = useState(VIDEO_DATA);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchItem(term);

    const filtered = VIDEO_DATA.filter((video) =>
      video.name.toLowerCase().includes(term)
    );
    setFilteredVideos(filtered);
  };

  const handleEdit = (id) => {
    console.log(`Edit video with id: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete video with id: ${id}`);
  };

  return (
    <motion.div
      className="bg-gray-400 bg-opacity-50 backdrop-blur-md shadow-lg border-b rounded-xl p-6 border border-gray-200 m-4 sm:m-6 lg:m-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4 sm:mb-0">Videos List</h2>
        <div className="relative w-full sm:w-1/3 lg:w-1/4">
          <input
            type="text"
            placeholder="Search Videos ..."
            className="bg-white text-black placeholder-gray-400 rounded-lg pl-10 pr-5 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 w-full"
            onChange={handleSearch}
            value={searchItem}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={17} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Number</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Video Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Date Posted</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">View</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-500">
            {filteredVideos.map((video) => (
              <tr key={video.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{video.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer">{video.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{video.posted_date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-900"
                  >
                    View Video
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex gap-2 justify-center">
                  <button
                    onClick={() => handleEdit(video.id)}
                    className="text-orange-400 hover:text-blue-900"
                  >
                    <Edit size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(video.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default VideosTable;
