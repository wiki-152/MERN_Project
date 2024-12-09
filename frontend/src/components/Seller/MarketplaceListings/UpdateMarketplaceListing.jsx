import React, { useEffect, useState } from 'react';
import { Upload, X, Edit, Trash2, Search } from 'lucide-react';
import axios from 'axios';
import useMarketplaceSellerStore from '../../../stores/marketplaceSellerStore';

const UpdateMarketplaceListing = () => {
  const { items, fetchSellerItems, updateItem, deleteItem } = useMarketplaceSellerStore();
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [imageFiles, setImageFiles] = useState([]);

  useEffect(() => {
    fetchSellerItems();
  }, [fetchSellerItems]);

  const handleEdit = (item) => {
    setSelectedItem(item);
    setImageFiles(item.images || []);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateItem(selectedItem._id, {
        ...selectedItem,
        images: imageFiles
      });
      setSelectedItem(null);
      setImageFiles([]);
      await fetchSellerItems();
      alert('Item updated successfully!');
    } catch (error) {
      console.error('Error updating item:', error);
      alert('Failed to update item. Please try again.');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await deleteItem(id);
        await fetchSellerItems();
        alert('Item deleted successfully!');
      } catch (error) {
        console.error('Error deleting item:', error);
        alert('Failed to delete item. Please try again.');
      }
    }
  };

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    const uploadedImageUrls = [];

    for (const file of files) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'PImages');

      try {
        const response = await axios.post(
          'https://api.cloudinary.com/v1_1/dhdbqlrdu/image/upload',
          formData
        );
        uploadedImageUrls.push(response.data.secure_url);
      } catch (error) {
        console.error('Error uploading image:', error);
        alert('Failed to upload image. Please try again.');
      }
    }

    setImageFiles(prev => [...prev, ...uploadedImageUrls]);
    setSelectedItem(prev => ({
      ...prev,
      images: [...(prev.images || []), ...uploadedImageUrls]
    }));
  };

  const removeImage = (index) => {
    setSelectedItem(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
    setImageFiles(prev => prev.filter((_, i) => i !== index));
  };

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search listings..."
          className="w-full pl-10 pr-4 py-2 bg-gray-700 rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Listings Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-700">
            <tr>
              <th className="p-4">Title</th>
              <th className="p-4">Category</th>
              <th className="p-4">Price</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr key={item._id} className="border-b border-gray-700">
                <td className="p-4">{item.title}</td>
                <td className="p-4">{item.category}</td>
                <td className="p-4">CHF {item.price}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded ${item.isSold ? 'bg-red-500' : 'bg-green-500'}`}>
                    {item.isSold ? 'Sold' : 'Available'}
                  </span>
                </td>
                <td className="p-4">
                  <button
                    onClick={() => handleEdit(item)}
                    className="mr-2 text-blue-400 hover:text-blue-300"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="text-red-400 hover:text-red-300"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 p-6 rounded-lg w-full max-w-2xl">
            <h3 className="text-xl font-bold mb-4">Edit Item</h3>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block mb-2">Title</label>
                <input
                  type="text"
                  value={selectedItem.title}
                  onChange={(e) => setSelectedItem({...selectedItem, title: e.target.value})}
                  className="w-full bg-gray-700 rounded p-2"
                  required
                />
              </div>

              <div>
                <label className="block mb-2">Category</label>
                <select
                  value={selectedItem.category}
                  onChange={(e) => setSelectedItem({...selectedItem, category: e.target.value})}
                  className="w-full bg-gray-700 rounded p-2"
                  required
                >
                  <option value="furniture">Furniture</option>
                  <option value="electronics">Electronics</option>
                  <option value="clothing">Clothing</option>
                  <option value="books">Books</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block mb-2">Description</label>
                <textarea
                  value={selectedItem.description}
                  onChange={(e) => setSelectedItem({...selectedItem, description: e.target.value})}
                  className="w-full bg-gray-700 rounded p-2 h-32"
                  required
                />
              </div>

              <div>
                <label className="block mb-2">Price (CHF)</label>
                <input
                  type="number"
                  value={selectedItem.price}
                  onChange={(e) => setSelectedItem({...selectedItem, price: e.target.value})}
                  className="w-full bg-gray-700 rounded p-2"
                  required
                  min="0"
                  step="0.01"
                />
              </div>

              <div>
                <label className="block mb-2">Images</label>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center justify-center w-32 h-32 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600">
                    <input
                      type="file"
                      multiple
                      onChange={handleImageUpload}
                      className="hidden"
                      accept="image/*"
                    />
                    <Upload className="w-8 h-8" />
                  </label>
                  
                  {selectedItem.images?.map((url, index) => (
                    <div key={index} className="relative w-32 h-32">
                      <img
                        src={url}
                        alt={`Upload ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-1 right-1 p-1 bg-red-500 rounded-full"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-500 rounded hover:bg-emerald-600"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateMarketplaceListing; 