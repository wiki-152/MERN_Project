import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const usePropertyStore = create(
  persist(
    (set) => ({
    searchParams: {
      location: '',
      radius: 0,
      priceMax: 'any',
      rooms: 'any',
      propertyType: 'rent',
      propertyTypes: [],
      amenities: [],
      floorArea: 50,
      furnished: 'any',
      address: {
        street: '',
        propertyNumber: '',
        city: '',
        postalCode: '',
        area: '',
        state: '',
      },
    },
    searchResults: [],
    propertyDetails: null,  // New state
    isLoading: false,
    error: null,

    setSearchParams: (params) =>
      set((state) => ({
        searchParams: { ...state.searchParams, ...params },
      })),

    searchProperties: async (params) => {
      set({ isLoading: true, error: null });
      try {
        const response = await fetch('http://localhost:2469/api/property/propertyNoAuth/filters', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(params),
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message);
        set({ searchResults: data, isLoading: false });
      } catch (error) {
        set({ error: error.message, isLoading: false });
        console.error(error);
      }
    },

    fetchPropertyDetails: async (id) => {
      set({ isLoading: true, error: null });
      try {
        const response = await fetch(`http://localhost:2469/api/property/property/${id}`);
        const data = await response.json();
        if (!response.ok) throw new Error(data.message);
        set({ propertyDetails: data, isLoading: false });
      } catch (error) {
        set({ error: error.message, isLoading: false });
        console.error(error);
      }
    },
  }),
  {
    name: 'property-store', // Key for localStorage
    partialize: (state) => ({
      searchParams: state.searchParams,
      searchResults: state.searchResults,
      propertyDetails: state.propertyDetails,
    }), // Save only relevant states
  }
));

export default usePropertyStore;
