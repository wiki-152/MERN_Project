import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';
import axios from 'axios';
import useMarketplaceSellerStore from '../../../stores/marketplaceSellerStore';

const NewMarketplaceListing = () => {
  const { createItem } = useMarketplaceSellerStore();
  
  const [item, setItem] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    images: []
  });

  const [imageFiles, setImageFiles] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem(prev => ({ ...prev, [name]: value }));
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
    setItem(prev => ({
      ...prev,
      images: [...prev.images, ...uploadedImageUrls]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (imageFiles.length === 0) {
      alert('Please upload at least one image.');
      return;
    }

    try {
      await createItem({
        ...item,
        price: Number(item.price),
        seller: localStorage.getItem('email')
      });
      alert('Item listed successfully!');
      // Reset form
      setItem({
        title: '',
        description: '',
        price: '',
        category: '',
        images: []
      });
      setImageFiles([]);
    } catch (error) {
      console.error('Error creating item:', error);
      alert('Failed to create listing. Please try again.');
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg mt-6">
      <h3 className="text-xl font-bold mb-4">Create New Listing</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={item.title}
              onChange={handleChange}
              className="w-full bg-gray-700 rounded p-2"
              required
            />
          </div>
          
          <div>
            <label className="block mb-2">Category</label>
            <select
              name="category"
              value={item.category}
              onChange={handleChange}
              className="w-full bg-gray-700 rounded p-2"
              required
            >
              <option value="">Select Category</option>
              <option value="furniture">Furniture</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="books">Books</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block mb-2">Description</label>
          <textarea
            name="description"
            value={item.description}
            onChange={handleChange}
            className="w-full bg-gray-700 rounded p-2 h-32"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Price (CHF)</label>
          <input
            type="number"
            name="price"
            value={item.price}
            onChange={handleChange}
            className="w-full bg-gray-700 rounded p-2"
            required
            min="0"
            step="0.01"
          />
        </div>

        <div>
          <label className="block mb-2">Images</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full bg-gray-700 rounded p-2"
          />
          <div className="mt-2 flex flex-wrap gap-2">
            {imageFiles.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Upload ${index + 1}`}
                className="w-20 h-20 object-cover rounded"
              />
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded"
        >
          Create Listing
        </button>
      </form>
    </div>
  );
};

export default NewMarketplaceListing; 