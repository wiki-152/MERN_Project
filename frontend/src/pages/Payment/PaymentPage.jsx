import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useMarketplaceStore from '../../stores/marketplaceStore';
import Swal from 'sweetalert2';

export default function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { purchaseItem } = useMarketplaceStore();
  const [isProcessing, setIsProcessing] = useState(false);

  // Get item details from navigation state
  const { itemId, itemTitle, itemPrice, itemImage, sellerId } = location.state || {};

  // Redirect if no item details
  useEffect(() => {
    if (!itemId) {
      navigate('/marketplace');
    }
  }, [itemId, navigate]);

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    try {
      const token = localStorage.getItem('listingOwnerStore');
      if (!token) {
        navigate('/login');
        return;
      }
  
      const success = await purchaseItem(itemId);
      if (success) {
        // Show success message
        Swal.fire({
          title: 'Purchase Successful!',
          text: 'Thank you for your purchase.',
          icon: 'success',
          confirmButtonText: 'Continue Shopping',
          confirmButtonColor: '#10B981', // emerald-500
        }).then(() => {
          navigate('/marketplace');
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Purchase Failed',
        text: error.message || 'There was an error processing your purchase.',
        icon: 'error',
        confirmButtonText: 'Try Again',
        confirmButtonColor: '#EF4444', // red-500
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-gray-800 rounded-lg shadow-xl p-6">
          <h1 className="text-2xl font-bold text-white mb-6">Complete Your Purchase</h1>
          
          {/* Item Summary */}
          <div className="flex items-center space-x-4 mb-6 p-4 bg-gray-700 rounded-lg">
            {itemImage && (
              <img 
                src={itemImage} 
                alt={itemTitle} 
                className="w-20 h-20 object-cover rounded"
              />
            )}
            <div>
              <h2 className="text-white font-semibold">{itemTitle}</h2>
              <p className="text-emerald-400 font-bold">CHF {itemPrice}</p>
            </div>
          </div>

          {/* Payment Form */}
          <form onSubmit={handlePaymentSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-2">Card Number</label>
              <input 
                type="text"
                placeholder="1234 5678 9012 3456"
                className="w-full p-3 rounded bg-gray-700 text-white"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 mb-2">Expiry Date</label>
                <input 
                  type="text"
                  placeholder="MM/YY"
                  className="w-full p-3 rounded bg-gray-700 text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">CVV</label>
                <input 
                  type="text"
                  placeholder="123"
                  className="w-full p-3 rounded bg-gray-700 text-white"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className={`w-full py-3 px-4 rounded-lg bg-emerald-400 text-black font-semibold
                hover:bg-emerald-500 transition-colors
                ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isProcessing ? 'Processing...' : `Pay CHF ${itemPrice}`}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 