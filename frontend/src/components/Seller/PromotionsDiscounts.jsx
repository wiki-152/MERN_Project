import React, { useState } from 'react';
import { Tag, Percent, Calendar } from 'lucide-react';

const PromotionsDiscounts = () => {
  const [promotionName, setPromotionName] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Promotion created:', { promotionName, discountPercentage, startDate, endDate });
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Promotions and Discounts</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1" htmlFor="promotionName">
            <Tag className="inline mr-2" />
            Promotion Name
          </label>
          <input
            id="promotionName"
            type="text"
            value={promotionName}
            onChange={(e) => setPromotionName(e.target.value)}
            className="w-full bg-gray-800 text-white p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="discountPercentage">
            <Percent className="inline mr-2" />
            Discount Percentage
          </label>
          <input
            id="discountPercentage"
            type="number"
            value={discountPercentage}
            onChange={(e) => setDiscountPercentage(e.target.value)}
            className="w-full bg-gray-800 text-white p-2 rounded"
            required
          />
        </div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block mb-1" htmlFor="startDate">
              <Calendar className="inline mr-2" />
              Start Date
            </label>
            <input
              id="startDate"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full bg-gray-800 text-white p-2 rounded"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1" htmlFor="endDate">
              <Calendar className="inline mr-2" />
              End Date
            </label>
            <input
              id="endDate"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full bg-gray-800 text-white p-2 rounded"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-gray-800 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Create Promotion
        </button>
      </form>
    </div>
  );
};

export default PromotionsDiscounts;

