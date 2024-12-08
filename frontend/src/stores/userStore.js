import { create } from 'zustand';
import axios from 'axios';
import useListingOwnerStore from './listingOwnerStore'; // Import the seller store

const API_BASE_URL = 'http://localhost:2469/api/user';

const useUserStore = create((set) => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null,
    isAuthenticated: !!localStorage.getItem('token'),
    loading: false,
    error: null,

    // Signup action
    signup: async (formData) => {
        try {
            set({ loading: true, error: null });
            const response = await axios.post(`${API_BASE_URL}/register`, formData);
            set((state) => {
                // Only update if the user data is different
                if (JSON.stringify(state.user) !== JSON.stringify(response.data.user)) {
                    localStorage.setItem('user', JSON.stringify(response.data.user));
                    localStorage.setItem('token', response.data.token);
                    return {
                        user: response.data.user,
                        token: response.data.token,
                        isAuthenticated: true,
                        loading: false,
                    };
                }
                return { loading: false };
            });
            useListingOwnerStore.getState().logout();
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
            set((state) => {
                if (JSON.stringify(state.user) !== JSON.stringify(response.data.user)) {
                    localStorage.setItem('user', JSON.stringify(response.data.user));
                    localStorage.setItem('token', response.data.token);
                    return {
                        user: response.data.user,
                        token: response.data.token,
                        isAuthenticated: true,
                        loading: false,
                    };
                }
                return { loading: false };
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
        localStorage.removeItem('user');
        localStorage.removeItem('token');
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
