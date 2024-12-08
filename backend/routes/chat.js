const express = require("express");
const axios = require("axios");
const router = express.Router();
const Property = require('../models/Property');

// Function to fetch property data from database
const fetchPropertyData = async (city) => {
  try {
    const properties = await Property.find({ "address.city": { $regex: new RegExp(city, 'i') } });
    console.log(properties);
    console.log(city);

    if (properties.length === 0) {
      return {
        message: `No properties found in ${city}`,
        properties: []
      };
    }

    // Separate properties by type
    const rentPerNightProperties = properties.filter(prop => prop.rentPerNight);
    const rentPriceProperties = properties.filter(prop => prop.rentPrice);

    // Calculate averages for rentPerNight properties
    const avgRentPerNight = rentPerNightProperties.length > 0
      ? rentPerNightProperties.reduce((sum, prop) => sum + (prop.rentPerNight || 0), 0) / rentPerNightProperties.length
      : 0;

    // Calculate averages for rentPrice properties
    const avgRentPrice = rentPriceProperties.length > 0
      ? rentPriceProperties.reduce((sum, prop) => sum + (prop.rentPrice || 0), 0) / rentPriceProperties.length
      : 0;
    
    // Only calculate average distance for properties that have a distance value
    const propertiesWithDistance = properties.filter(prop => prop.distance);
    const avgDistance = propertiesWithDistance.length > 0
      ? propertiesWithDistance.reduce((sum, prop) => {
          const dist = parseFloat(prop.distance.replace('km', ''));
          return sum + dist;
        }, 0) / propertiesWithDistance.length
      : 0;

    return {
      avgRentPerNight: rentPerNightProperties.length > 0 ? Math.round(avgRentPerNight) : 'N/A',
      avgRentPrice: rentPriceProperties.length > 0 ? Math.round(avgRentPrice) : 'N/A',
      avgDistance: avgDistance ? `${avgDistance.toFixed(1)}km` : 'N/A',
      properties: properties.map(prop => ({
        name: prop.name,
        rentPerNight: prop.rentPerNight || 'N/A',
        rentPrice: prop.rentPrice || 'N/A',
        distance: prop.distance || 'N/A',
        description: prop.description || '',
        address: prop.address,
        propertyType: prop.rentPerNight ? 'nightly' : 'monthly'
      }))
    };
  } catch (error) {
    console.error('Error fetching property data:', error);
    throw error;
  }
};

// Function to get response from Gemini API
const getGeminiResponse = async (query, propertyData) => {
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`;
  const headers = {
    "Content-Type": "application/json"
  };
  
  const prompt = `
    As a real estate assistant, please help with this query: "${query}"
    
    Here's the available property data:
    Average Rent Per Night: ${propertyData.avgRentPerNight}
    Average Rent Price: ${propertyData.avgRentPrice}
    Average Distance from City Center: ${propertyData.avgDistance}
    Number of Properties: ${propertyData.properties.length}
    
    Property Details:
    ${JSON.stringify(propertyData.properties, null, 2)}
    
    Please provide a helpful response addressing the query using this property data.
  `;

  const data = {
    contents: [{
      parts: [{
        text: prompt
      }]
    }]
  };

  try {
    const response = await axios.post(apiUrl, data, { headers });
    return response.data;
  } catch (error) {
    console.error('Error getting Gemini response:', error);
    throw error;
  }
};

// Utility function to extract city from query using basic NLP
const extractCity = (query) => {
  const commonCities = ['new york', 'los angeles', 'chicago', 'houston', 'phoenix', 'philadelphia', 'san antonio', 'san diego', 'dallas', 'san jose'];
  const queryLower = query.toLowerCase();
  
  for (const city of commonCities) {
    if (queryLower.includes(city)) {
      return city;
    }
  }
  
  // Extract words that could be cities (capitalized words)
  const words = query.split(' ');
  const potentialCity = words.find(word => /^[A-Z]/.test(word));
  
  return potentialCity || 'New York'; // Default to New York if no city found
};

router.post("/chat", async (req, res) => {
  try {
    const { query, location } = req.body;
    
    // Extract city from query or use location if provided
    const city = location || extractCity(query);
    
    // Fetch property data
    const propertyData = await fetchPropertyData(city);
    
    // Get AI response using property data
    const aiResponse = await getGeminiResponse(query, propertyData);
    
    // Prepare final response
    const response = {
      reply: aiResponse,
      propertyData: propertyData,
      city: city
    };

    res.json(response);
  } catch (error) {
    console.error("Error in chatbot API:", error);
    res.status(500).json({
      error: "Error processing request",
      details: error.message
    });
  }
});

module.exports = router;
