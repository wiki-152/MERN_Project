import { create } from 'zustand';
import axios from 'axios';
import useListingOwnerStore from './listingOwnerStore'; // Import the seller store

const API_BASE_URL = 'http://localhost:2469/api/user';

const useUserStore = create((set) => ({
    user: null,
    token: null, // Store the token here
    isAuthenticated: false,
    loading: false,
    error: null,

    // Signup action
    signup: async (formData) => {
        try {
            set({ loading: true, error: null });
            const response = await axios.post(`${API_BASE_URL}/register`, formData);
            set({
                user: response.data.user,
                token: response.data.token,
                isAuthenticated: true,
                loading: false,
            });
            useListingOwnerStore.getState().logout(); // Reset seller state
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
            set({
                user: response.data.user,
                token: response.data.token,
                isAuthenticated: true,
                loading: false,
            });
            return true;
        } catch (err) {
            set({
                error: err.response?.data?.message || 'Login failed. Please try again.',
                loading: false,
            });
            return false;
        }
    },

    // Logout action
    logout: (fromListingOwner = false) => {
        set({
            user: null,
            token: null,
            isAuthenticated: false,
            error: null,
        });
        if (!fromListingOwner) {
            useListingOwnerStore.getState().logout(true);
        }
    },

    clearError: () => set({ error: null }),
}));

export default useUserStore;
