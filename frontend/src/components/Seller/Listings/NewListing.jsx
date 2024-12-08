import React, { useState } from 'react';
import { Home, DollarSign, Calendar, Image, Coffee, MapPin, Bed, Square, Tag, Building, CheckSquare, Upload, X } from 'lucide-react';

const NewListing = () => {
  const [property, setProperty] = useState({
    title: '',
    description: '',
    location: '',
    pricePerNight: '',
    images: [],
    amenities: [],
    availabilityDate: '',
    numberOfRooms: '',
    rentPrice: '',
    address: {
      street: '',
      propertyNumber: '',
      area: '',
      city: '',
      state: '',
      postalCode: '',
    },
    toRent: true,
    toSell: false,
    toRentPerNight: false,
    propertyType: '',
    areaInSquareMeters: '',
  });

  const [imageFiles, setImageFiles] = useState([]);
  const [virtualTourImages, setVirtualTourImages] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setProperty(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setProperty(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImageFiles(prev => [...prev, ...files]);
  };

  const removeImage = (index) => {
    setImageFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleVirtualTourImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setVirtualTourImages(prev => [...prev, ...files]);
  };

  const removeVirtualTourImage = (index) => {
    setVirtualTourImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (imageFiles.length < 5) {
      alert('Please upload at least 5 property images.');
      return;
    }
    if (virtualTourImages.length < 3) {
      alert('Please upload at least 3 virtual tour images.');
      return;
    }
    // Here you would typically send the data to your backend
    // You'd need to handle file uploads separately, possibly using FormData
    console.log({ ...property, imageFiles, virtualTourImages });
  };

  const propertyTypes = [
    // Residential
    'single-family-home', 'multi-family-home', 'apartment', 'condo', 'townhouse', 'villa', 'cottage', 'mobile-home', 'mansion', 'co-living-space', 'penthouse',
    // Commercial
    'office-buildings-high-rise', 'office-buildings-low-rise', 'office-buildings-business-park', 'retail-shopping-mall', 'retail-supermarket', 'retail-standalone-store', 'hotel', 'resort', 'industrial-park',
    // Industrial
    'factory', 'warehouse', 'distribution-center', 'cold-storage',
    // Agricultural
    'farmland', 'ranch', 'orchard', 'vineyard',
    // Mixed-Use
    'mixed-use-development', 'live-work-space',
    // Recreational
    'vacation-home', 'cabin', 'recreational-resort', 'campground',
    // Special-Purpose
    'hospital', 'clinic', 'school', 'church', 'stadium', 'cemetery',
    // Luxury
    'private-island', 'estate', 'floating-home',
    // Land
    'raw-land', 'developed-land', 'subdivision',
    // Shared Spaces
    'shared-room',
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Add Property Listing</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2">
              <Home className="inline mr-2" />
              Title
            </label>
            <input
              type="text"
              name="title"
              value={property.title}
              onChange={handleChange}
              className="w-full bg-gray-800 rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block mb-2">
              <MapPin className="inline mr-2" />
              Location
            </label>
            <input
              type="text"
              name="location"
              value={property.location}
              onChange={handleChange}
              className="w-full bg-gray-800 rounded p-2"
              required
            />
          </div>
        </div>

        <div>
          <label className="block mb-2">Description (50-100 words)</label>
          <textarea
            name="description"
            value={property.description}
            onChange={handleChange}
            className="w-full bg-gray-800 rounded p-2 h-32"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block mb-2">
              <DollarSign className="inline mr-2" />
              Price Per Night
            </label>
            <input
              type="number"
              name="pricePerNight"
              value={property.pricePerNight}
              onChange={handleChange}
              className="w-full bg-gray-800 rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block mb-2">
              <Bed className="inline mr-2" />
              Number of Rooms
            </label>
            <input
              type="number"
              name="numberOfRooms"
              value={property.numberOfRooms}
              onChange={handleChange}
              className="w-full bg-gray-800 rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block mb-2">
              <DollarSign className="inline mr-2" />
              Rent Price
            </label>
            <input
              type="number"
              name="rentPrice"
              value={property.rentPrice}
              onChange={handleChange}
              className="w-full bg-gray-800 rounded p-2"
              required
            />
          </div>
        </div>

        <div>
          <label className="block mb-2">
            <Image className="inline mr-2" />
            Property Images (Minimum 5)
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="w-full bg-gray-800 rounded p-2"
            required
          />
          <p className="text-sm text-gray-400 mt-1">Selected files: {imageFiles.length}</p>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {imageFiles.map((file, index) => (
              <div key={index} className="relative">
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Uploaded image ${index + 1}`}
                  className="w-full h-32 object-cover rounded"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
                  aria-label={`Remove image ${index + 1}`}
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block mb-2">
            <Image className="inline mr-2" />
            Virtual Tour Images (Minimum 3)
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleVirtualTourImageUpload}
            className="w-full bg-gray-800 rounded p-2"
            required
          />
          <p className="text-sm text-gray-400 mt-1">Selected virtual tour files: {virtualTourImages.length}</p>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {virtualTourImages.map((file, index) => (
              <div key={index} className="relative">
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Virtual tour image ${index + 1}`}
                  className="w-full h-32 object-cover rounded"
                />
                <button
                  type="button"
                  onClick={() => removeVirtualTourImage(index)}
                  className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
                  aria-label={`Remove virtual tour image ${index + 1}`}
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block mb-2">
            <Coffee className="inline mr-2" />
            Amenities (comma-separated)
          </label>
          <input
            type="text"
            name="amenities"
            value={property.amenities.join(',')}
            onChange={(e) => setProperty(prev => ({ ...prev, amenities: e.target.value.split(',') }))}
            className="w-full bg-gray-800 rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-2">
            <Calendar className="inline mr-2" />
            Availability Date
          </label>
          <input
            type="date"
            name="availabilityDate"
            value={property.availabilityDate}
            onChange={handleChange}
            className="w-full bg-gray-800 rounded p-2"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2">
              <MapPin className="inline mr-2" />
              Street
            </label>
            <input
              type="text"
              name="address.street"
              value={property.address.street}
              onChange={handleChange}
              className="w-full bg-gray-800 rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block mb-2">
              <Home className="inline mr-2" />
              Property Number
            </label>
            <input
              type="text"
              name="address.propertyNumber"
              value={property.address.propertyNumber}
              onChange={handleChange}
              className="w-full bg-gray-800 rounded p-2"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block mb-2">Area</label>
            <input
              type="text"
              name="address.area"
              value={property.address.area}
              onChange={handleChange}
              className="w-full bg-gray-800 rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block mb-2">City</label>
            <input
              type="text"
              name="address.city"
              value={property.address.city}
              onChange={handleChange}
              className="w-full bg-gray-800 rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block mb-2">State</label>
            <input
              type="text"
              name="address.state"
              value={property.address.state}
              onChange={handleChange}
              className="w-full bg-gray-800 rounded p-2"
              required
            />
          </div>
        </div>

        <div>
          <label className="block mb-2">Postal Code</label>
          <input
            type="text"
            name="address.postalCode"
            value={property.address.postalCode}
            onChange={handleChange}
            className="w-full bg-gray-800 rounded p-2"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="toRent"
                checked={property.toRent}
                onChange={(e) => setProperty(prev => ({ ...prev, toRent: e.target.checked }))}
                className="mr-2"
              />
              <CheckSquare className="inline mr-2" />
              Available for Rent
            </label>
          </div>
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="toSell"
                checked={property.toSell}
                onChange={(e) => setProperty(prev => ({ ...prev, toSell: e.target.checked }))}
                className="mr-2"
              />
              <CheckSquare className="inline mr-2" />
              Available for Sale
            </label>
          </div>
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="toRentPerNight"
                checked={property.toRentPerNight}
                onChange={(e) => setProperty(prev => ({ ...prev, toRentPerNight: e.target.checked }))}
                className="mr-2"
              />
              <CheckSquare className="inline mr-2" />
              Available for Nightly Rent
            </label>
          </div>
        </div>

        <div>
          <label className="block mb-2">
            <Building className="inline mr-2" />
            Property Type
          </label>
          <select
            name="propertyType"
            value={property.propertyType}
            onChange={handleChange}
            className="w-full bg-gray-800 rounded p-2"
            required
          >
            <option value="">Select Property Type</option>
            {propertyTypes.map((type) => (
              <option key={type} value={type}>
                {type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2">
            <Square className="inline mr-2" />
            Area in Square Meters
          </label>
          <input
            type="number"
            name="areaInSquareMeters"
            value={property.areaInSquareMeters}
            onChange={handleChange}
            className="w-full bg-gray-800 rounded p-2"
            required
          />
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          <Upload className="inline mr-2" />
          Add Property Listing
        </button>
      </form>
    </div>
  );
};

export default NewListing;

