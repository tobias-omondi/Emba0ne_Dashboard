import { Edit, Search, Trash2, PlusCircle, Save } from 'lucide-react';
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
  const [images, setImages] = useState(IMAGE_DATA);
  const [newImage, setNewImage] = useState({ name: '', url: '', posted_date: '' });
  const [isAdding, setIsAdding] = useState(false);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchItem(term);

    const filtered = images.filter(
      (image) => image.name.toLowerCase().includes(term) || image.url.toLowerCase().includes(term)
    );
    setFilteredImages(filtered);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewImage({ ...newImage, [name]: value });
  };

  const addImage = () => {
    if (newImage.name && newImage.url && newImage.posted_date) {
      const newId = images.length ? images[images.length - 1].id + 1 : 1;
      const imageToAdd = { ...newImage, id: newId };
      const updatedImages = [...images, imageToAdd];
      setImages(updatedImages);
      setFilteredImages(updatedImages);
      setNewImage({ name: '', url: '', posted_date: '' });
      setIsAdding(false);
    }
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
        <div className="relative w-full sm:w-1/3 mt-4 sm:mt-0">
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

      {/* Add Image Section (at the bottom of the table) */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-600 flex items-center mt-5"
        onClick={() => setIsAdding(!isAdding)}
      >
        <PlusCircle size={18} className="mr-2" />
        {isAdding ? 'Cancel' : 'Add Image'}
      </button>

      {isAdding && (
        <div className="bg-gray-400 p-4 rounded-md mb-4">
          <h3 className="text-lg font-semibold mb-2">Add New Image</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3">
            <input
              type="text"
              name="name"
              placeholder="Image Name"
              value={newImage.name}
              onChange={handleInputChange}
              className="p-2 border rounded px-2 "
            />
            <input
              type="text"
              name="url"
              placeholder="Image URL"
              value={newImage.url}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
            <input
              type="date"
              name="posted_date"
              value={newImage.posted_date}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
          </div>
          <button
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 flex items-center"
            onClick={addImage}
          >
            <Save size={18} className="mr-2" />
            Save Image
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default ImagesTable;
