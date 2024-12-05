import { create } from 'zustand';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:2469/api/listingOwner'; // Define the base URL for the API

const useListingOwnerStore = create((set) => ({
    listingOwner: null, // Stores the authenticated listing owner data
    isAuthenticated: false, // Tracks if the listing owner is logged in
    loading: false, // Tracks loading state
    error: null, // Tracks error messages

    // Signup action for listing owners
    signup: async (formData) => {
        try {
            set({ loading: true, error: null }); // Set loading to true and clear errors
            const response = await axios.post(`${API_BASE_URL}/register`, formData); // Use the API_BASE_URL
            set({ listingOwner: response.data, isAuthenticated: true, loading: false });
        } catch (err) {
            set({
                error: err.response?.data?.message || 'Signup failed. Please try again.',
                loading: false,
            });
        }
    },

    // Login action for listing owners
    login: async (credentials) => {
        try {
            set({ loading: true, error: null }); // Set loading to true and clear errors
            const response = await axios.post(`${API_BASE_URL}/login`, credentials); // Use the API_BASE_URL
            set({ listingOwner: response.data, isAuthenticated: true, loading: false });
        } catch (err) {
            set({
                error: err.response?.data?.message || 'Login failed. Please try again.',
                loading: false,
            });
        }
    },

    isAuthenticated: (get) => !!get().listingOwner, // Returns true if a listing owner is logged in

    // Logout action for listing owners
    logout: () => {
        set({ listingOwner: null, isAuthenticated: false, error: null }); // Reset listing owner state
    },

    // Method to clear errors
    clearError: () => set({ error: null }),
}));

export default useListingOwnerStore;
