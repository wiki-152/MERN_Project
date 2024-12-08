import { create } from 'zustand';
import axios from 'axios';
import useUserStore from './userStore'; // Import the customer store
import Cookies from 'js-cookie'; // Import js-cookie for cookie management

const API_BASE_URL = 'http://localhost:2469/api/listingOwner';

const useListingOwnerStore = create((set) => {
    // Load initial state from cookies
    const storedListingOwner = Cookies.get('listingOwner');
    const storedToken = Cookies.get('token');
    const isAuthenticated = storedToken !== undefined;
    console.log(storedListingOwner, storedToken, isAuthenticated)

    return {
        // ------------------------------------------------------------------------json parse issue 
        listingOwner: storedListingOwner? (storedListingOwner) : null,
        token: storedToken || null,
        isAuthenticated,
        loading: false,
        error: null,

        // Signup action
        signup: async (formData) => {
            try {
                set({ loading: true, error: null });
                const response = await axios.post(`${API_BASE_URL}/register`, formData);
                set({
                    listingOwner: response.data.listingOwner,
                    token: response.data.token,
                    isAuthenticated: true,
                    loading: false,
                });
                // Save to cookies
                Cookies.set('listingOwner', JSON.stringify(response.data.listingOwner), { expires: 7 });
                Cookies.set('token', response.data.token, { expires: 7 });
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
                set({
                    listingOwner: response.data.listingOwner,
                    token: response.data.token,
                    isAuthenticated: true,
                    loading: false,
                });
                // Save to cookies
                Cookies.set('listingOwner', JSON.stringify(response.data.listingOwner), { expires: 7 });
                Cookies.set('token', response.data.token, { expires: 7 });
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
        logout: (fromUserStore = false) => {
            set({
                listingOwner: null,
                token: null,
                isAuthenticated: false,
                error: null,
            });
            // Clear cookies
            Cookies.remove('listingOwner');
            Cookies.remove('token');
            if (!fromUserStore) {
                useUserStore.getState().logout(true);
            }
        },

        clearError: () => set({ error: null }),
    };
});

export default useListingOwnerStore;
