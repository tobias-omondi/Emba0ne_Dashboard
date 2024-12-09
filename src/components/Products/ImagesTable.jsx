import { Edit, Search, Trash2 } from 'lucide-react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const IMAGE_DATA = [
  { id: 1, url: 'https://example.com/image1.jpg', name: 'Image 1', posted_date: '2024-12-09' },
  { id: 2, url: 'https://example.com/image2.jpg', name: 'Image 2', posted_date: '2024-12-08' },
  { id: 3, url: 'https://example.com/image3.jpg', name: 'Image 3', posted_date: '2024-12-07' },
  { id: 4, url: 'https://example.com/image4.jpg', name: 'Image 4', posted_date: '2024-12-06' },
];

const ImagesTable = () => {
  const [searchItem, setSearchItem] = useState('');
  const [filteredImages, setFilteredImages] = useState(IMAGE_DATA);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchItem(term);

    // Filter images based on the search term in name or url
    const filtered = IMAGE_DATA.filter(
      (image) => image.name.toLowerCase().includes(term) || image.url.toLowerCase().includes(term)
    );
    setFilteredImages(filtered);
  };

  return (
    <motion.div
      className="bg-gray-400 bg-opacity-50 backdrop-blur-md shadow-lg border-b rounded-xl p-6 border border-gray-200 mx-4 sm:mx-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-700">Image List</h2>
        <div className="relative w-full sm:w-1/3 mt-4 sm:mt-0"> {/* Full width on small screens, limited width on larger */}
          <input
            type="text"
            placeholder="Search Images ..."
            className="bg-white-200 text-black placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 w-full"
            onChange={handleSearch}
            value={searchItem}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={17} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Number</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Image URL</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Date Posted</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-500">
            {filteredImages.map((image) => (
              <tr key={image.id}>
                <td className="px-6 py-3 text-sm text-gray-500">{image.id}</td>
                <td className="px-6 py-3 text-sm text-gray-900 hover:text-gray-700 cursor-pointer">{image.url}</td>
                <td className="px-6 py-3 text-sm text-gray-500">{image.posted_date}</td>
                <td className="px-6 py-3 text-sm text-gray-500">
                  <button className="text-orange-500 hover:text-blue-900">
                    <Edit size={16} />
                  </button>
                  <button className="text-red-500 ml-4 hover:text-red-900">
                    <Trash2 size={16} />
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

export default ImagesTable;
