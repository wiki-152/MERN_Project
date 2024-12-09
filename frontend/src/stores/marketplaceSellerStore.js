import { create } from 'zustand';
import axios from 'axios';

const useMarketplaceSellerStore = create((set) => ({
  items: [],
  isLoading: false,
  error: null,

  // Create new item
  createItem: async (itemData) => {
    set({ isLoading: true, error: null });
    try {
      const token = localStorage.getItem('listingOwnerStore');
      const response = await axios.post('http://localhost:2469/api/marketplace/items', itemData, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      set((state) => ({
        items: [...state.items, response.data],
        isLoading: false
      }));
      return response.data;
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },

  // Get all items for seller
  fetchSellerItems: async () => {
    set({ isLoading: true, error: null });
    try {
      const token = localStorage.getItem('listingOwnerStore');
      const response = await axios.get('http://localhost:2469/api/marketplace/seller/items', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      set({ items: response.data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  // Update item
  updateItem: async (itemId, updateData) => {
    set({ isLoading: true, error: null });
    try {
      const token = localStorage.getItem('listingOwnerStore');
      const response = await axios.put(`http://localhost:2469/api/marketplace/items/${itemId}`, updateData, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      set((state) => ({
        items: state.items.map(item => 
          item._id === itemId ? response.data : item
        ),
        isLoading: false
      }));
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  // Delete item
  deleteItem: async (itemId) => {
    set({ isLoading: true, error: null });
    try {
      const token = localStorage.getItem('listingOwnerStore');
      await axios.delete(`http://localhost:2469/api/marketplace/items/${itemId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      set((state) => ({
        items: state.items.filter(item => item._id !== itemId),
        isLoading: false
      }));
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  }
}));

export default useMarketplaceSellerStore; 