import { create } from 'zustand';

const usePropertyStore = create((set) => ({
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
  },
  searchResults: [],
  isLoading: false,
  error: null,

  setSearchParams: (params) => 
    set((state) => ({ 
      searchParams: { ...state.searchParams, ...params } 
    })),

  searchProperties: async (params) => {
    set({ isLoading: true, error: null });
    //console.log("params from frontend"+JSON.stringify(params));
    try {
      const response = await fetch('http://localhost:2469/api/property/propertyNoAuth/filters', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });
      const data = await response.json();

      console.log("After backend in zustore"+JSON.stringify(data));
      
      if (!response.ok) {
        throw new Error(data.message);
      }
      
      set({ searchResults: data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
      console.error(error);
    }
  },
}));

export default usePropertyStore;
