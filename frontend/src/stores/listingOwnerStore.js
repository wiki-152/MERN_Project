import { create } from 'zustand';
import axios from 'axios';
import useUserStore from './userStore'; // Import the customer store

const API_BASE_URL = 'http://localhost:2469/api/listingOwner';

const useListingOwnerStore = create((set) => ({
    listingOwner: null,
    isAuthenticated: false,
    loading: false,
    error: null,

    // Signup action
    signup: async (formData) => {
        try {
            set({ loading: true, error: null });
            const response = await axios.post(`${API_BASE_URL}/register`, formData);
            set({ listingOwner: response.data, isAuthenticated: true, loading: false });
            useUserStore.getState().logout(); // Reset customer state
        } catch (err) {
            set({
                error: err.response?.data?.message || 'Signup failed. Please try again.',
                loading: false,
            });
        }
    },

    // Login action
    login: async (credentials) => {
        try {
            set({ loading: true, error: null });
            const response = await axios.post(`${API_BASE_URL}/login`, credentials);
            set({ listingOwner: response.data, isAuthenticated: true, loading: false });
        } catch (err) {
            set({
                error: err.response?.data?.message || 'Login failed. Please try again.',
                loading: false,
            });
        }
    },

    // Logout action
    logout: (fromUserStore = false) => {
        set({ listingOwner: null, isAuthenticated: false, error: null });
        if (!fromUserStore) {
            useUserStore.getState().logout(true);
        }
    },

    clearError: () => set({ error: null }),
}));

export default useListingOwnerStore;
