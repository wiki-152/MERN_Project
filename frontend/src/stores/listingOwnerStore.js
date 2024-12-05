import { create } from 'zustand';
import axios from 'axios';

const useListingOwnerStore = create((set) => ({
    listingOwner: null, // Stores the authenticated listing owner data
    isAuthenticated: false, // Tracks if the listing owner is logged in
    loading: false, // Tracks loading state
    error: null, // Tracks error messages

    // Login action for listing owners
    login: async (credentials) => {
        try {
            set({ loading: true, error: null });
            const response = await axios.post('http://localhost:2469/api/listingOwner/login', credentials);
            set({ listingOwner: response.data, isAuthenticated: true, loading: false });
        } catch (err) {
            set({
                error: err.response?.data?.message || 'Login failed. Please try again.',
                loading: false,
            });
        }
    },

    clearError: () => set({ error: null }), // Method to clear errors
}));

export default useListingOwnerStore;
