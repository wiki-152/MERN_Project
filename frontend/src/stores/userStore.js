import { create } from 'zustand';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:2469/api/user'; // Define the base URL for the API

const useUserStore = create((set) => ({
    user: null, // Stores the authenticated user's data
    isAuthenticated: false, // Tracks if the user is logged in
    loading: false, // Tracks loading state
    error: null, // Tracks any error messages

    // Signup action
    signup: async (formData) => {
        try {
            set({ loading: true, error: null }); // Set loading to true and clear errors
            const response = await axios.post(`${API_BASE_URL}/register`, formData); // Use the variable
            set({ user: response.data, isAuthenticated: true, loading: false });
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
            set({ loading: true, error: null }); // Set loading to true and clear errors
            const response = await axios.post(`${API_BASE_URL}/login`, credentials); // Use the variable
            set({ user: response.data, isAuthenticated: true, loading: false });
        } catch (err) {
            set({
                error: err.response?.data?.message || 'Login failed. Please try again.',
                loading: false,
            });
        }
    },

    isAuthenticated: (get) => !!get().user, // Returns true if a user is logged in

    // Logout action
    logout: () => {
        set({ user: null, isAuthenticated: false, error: null }); // Reset user state
    },

    clearError: () => set({ error: null }), // Method to clear errors
}));

export default useUserStore;
