import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Shield, CreditCard, Lock } from 'lucide-react';
import useMarketplaceStore from '../../stores/marketplaceStore';

export default function PaymentPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getItemDetails, purchaseItem } = useMarketplaceStore();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });

  useEffect(() => {
    const loadItem = async () => {
      try {
        const itemData = await getItemDetails(id);
        if (!itemData) {
          navigate('/marketplace');
          return;
        }
        setItem(itemData);
      } catch (error) {
        console.error('Error loading item:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadItem();
  }, [id, getItemDetails, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    try {
      await purchaseItem(id);
      alert('Payment successful!');
      navigate('/marketplace');
    } catch (error) {
      alert('Payment failed: ' + error.message);
    } finally {
      setIsProcessing(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-red-500">Item not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <CreditCard className="mr-2" />
              Secure Payment
            </h2>

            {/* Order Summary */}
            <div className="mb-8 p-4 bg-gray-700 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-4">Order Summary</h3>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">{item.title}</span>
                <span className="text-emerald-400 font-bold">CHF {item.price}</span>
              </div>
            </div>

            {/* Payment Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Card Number
                </label>
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={paymentDetails.cardNumber}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-white focus:ring-2 focus:ring-emerald-400"
                  required
                  maxLength="19"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={paymentDetails.expiryDate}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-white focus:ring-2 focus:ring-emerald-400"
                    required
                    maxLength="5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    name="cvv"
                    placeholder="123"
                    value={paymentDetails.cvv}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-white focus:ring-2 focus:ring-emerald-400"
                    required
                    maxLength="3"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  name="cardholderName"
                  placeholder="John Doe"
                  value={paymentDetails.cardholderName}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-white focus:ring-2 focus:ring-emerald-400"
                  required
                />
              </div>

              <div className="flex items-center text-sm text-gray-400 mt-4">
                <Lock className="w-4 h-4 mr-2" />
                Your payment information is encrypted and secure
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className={`w-full py-3 px-4 rounded-lg bg-emerald-400 text-black font-semibold
                  hover:bg-emerald-500 transition-colors flex items-center justify-center
                  ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isProcessing ? 'Processing...' : 'Complete Payment'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 