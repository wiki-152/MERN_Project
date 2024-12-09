import { create } from 'zustand';
import axios from 'axios';

const useMarketplaceStore = create((set) => ({
  items: [],
  searchParams: {},
  isLoading: false,
  error: null,

  setSearchParams: (params) => set({ searchParams: params }),

  searchItems: async (params) => {
    set({ isLoading: true, error: null });
    try {
      const searchQuery = {
        category: params.category !== 'any' ? params.category : undefined,
        minPrice: undefined,
        maxPrice: params.priceMax !== 'any' ? Number(params.priceMax) : undefined,
        condition: params.condition !== 'any' ? params.condition : undefined,
        query: params.query
      };

      Object.keys(searchQuery).forEach(key => 
        searchQuery[key] === undefined && delete searchQuery[key]
      );

      const response = await axios.get('http://localhost:2469/api/marketplace/search', { 
        params: searchQuery 
      });

      const items = response.data.map(item => ({
        ...item,
        seller: {
          name: item.seller?.username ?? 'Anonymous',
          email: item.seller?.email ?? 'N/A',
          joinDate: item.seller?.createdAt ? 
            new Date(item.seller.createdAt).getFullYear() : 
            new Date().getFullYear()
        }
      }));
      
      set({ items, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  getItemDetails: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get(`http://localhost:2469/api/marketplace/items/${id}`);
      console.log('Backend Response:', response.data);
      
      if (!response.data || !response.data._id) {
        throw new Error('Invalid item data received');
      }

      const item = {
        ...response.data,
        seller: {
          name: response.data.seller?.username || 'Anonymous',
          email: response.data.seller?.email,
          joinDate: response.data.seller?.createdAt ? 
            new Date(response.data.seller.createdAt).getFullYear() : null
        }
      };
      
      set({ isLoading: false });
      return item;
    } catch (error) {
      console.error('Error fetching item details:', error);
      set({ error: error.message, isLoading: false });
      return null;
    }
  },

  purchaseItem: async (itemId) => {
    set({ isLoading: true, error: null });
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        `http://localhost:2469/api/marketplace/purchase/${itemId}`,
        {}, // empty body
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      
      if (!response.data.success) {
        throw new Error(response.data.message || 'Purchase failed');
      }

      // Update the items list to reflect the purchase
      set(state => ({
        items: state.items.map(item => 
          item._id === itemId 
            ? { ...item, status: 'sold' }
            : item
        ),
        isLoading: false
      }));

      return true;
    } catch (error) {
      console.error('Error purchasing item:', error);
      set({ error: error.message, isLoading: false });
      return false;
    }
  }
}));



export default useMarketplaceStore; 