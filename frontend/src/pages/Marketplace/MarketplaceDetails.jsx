import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Shield } from 'lucide-react';
import useMarketplaceStore from '../../stores/marketplaceStore';

export default function MarketplaceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getItemDetails, purchaseItem } = useMarketplaceStore();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const loadItem = async () => {
      try {
        console.log('Fetching item with ID:', id);
        const itemData = await getItemDetails(id);
        console.log('Fetched item:', itemData);
        if (!itemData) {
       //   navigate('/marketplace');
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

  const handlePurchase = async () => {
    try {
      const token = localStorage.getItem('listingOwnerStore');
      if (!token) {
        navigate('/login');
        return;
      }

      // Navigate to payment page with item details
      navigate(`/payment`, {
        state: {
          itemId: id,
          itemTitle: item.title,
          itemPrice: item.price,
          itemImage: item.images?.[0],
          sellerId: item.seller?._id
        }
      });
    } catch (error) {
      alert('Error processing purchase: ' + error.message);
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
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-6">
            {/* Images Section */}
            <div className="space-y-4">
              <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden">
                {item.images && item.images.length > 0 ? (
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-400">No image available</span>
                  </div>
                )}
              </div>
              
              {/* Thumbnail Grid */}
              {item.images && item.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {item.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${item.title} - ${index + 1}`}
                      className="w-full h-20 object-cover rounded cursor-pointer"
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-white">{item.title}</h1>
                <p className="text-2xl font-bold text-emerald-400 mt-2">
                  CHF {item.price}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h2 className="text-lg font-semibold text-white">Description</h2>
                  <p className="text-gray-300">{item.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Category</h3>
                    <p className="text-white">{item.category}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Condition</h3>
                    <p className="text-white">{item.condition}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Seller</h3>
                    <p className="text-white">{item.seller?.name || 'Anonymous'}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Location</h3>
                    <p className="text-white">{item.location || 'Not specified'}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <button
                  onClick={handlePurchase}
                  disabled={isProcessing}
                  className={`w-full py-3 px-4 rounded-lg bg-emerald-400 text-black font-semibold
                    hover:bg-emerald-500 transition-colors
                    ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isProcessing ? 'Processing...' : 'Purchase Now'}
                </button>

                <button
                  className="w-full py-3 px-4 rounded-lg border border-emerald-400 text-emerald-400
                    hover:bg-emerald-400/10 transition-colors flex items-center justify-center"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Add Insurance Protection
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 