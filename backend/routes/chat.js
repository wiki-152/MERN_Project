const express = require("express");
const axios = require("axios");
const router = express.Router();
const Property = require('../models/Property');

// Replace the dummy fetchPropertyData function
const fetchPropertyData = async (city) => {
  try {
    // Find all properties in the given city
    const properties = await Property.find({ city: city });
    
    // Calculate average price
    const avgPrice = properties.reduce((sum, prop) => sum + prop.price, 0) / properties.length;
    
    // Calculate average distance from city center
    const avgDistance = properties.reduce((sum, prop) => {
      // Convert distance string to number (remove 'km' and parse)
      const dist = parseFloat(prop.distance.replace('km', ''));
      return sum + dist;
    }, 0) / properties.length;

    return {
      avgPrice: Math.round(avgPrice),
      avgDistance: `${avgDistance.toFixed(1)}km`,
      properties: properties.map(prop => ({
        name: prop.name,
        price: prop.price,
        distance: prop.distance
      }))
    };
  } catch (error) {
    console.error('Error fetching property data:', error);
    throw error;
  }
};

// New function to fetch process description from Gemini API
const fetchProcessDescriptionFromAPI = async (userInput) => {
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`;
  const headers = {
    "Content-Type": "application/json"
  };
  const data = {
    contents: [
      {
        parts: [
          {
            text: (
              `Read the following process description: ${userInput}\n` +
              "Your task is to break it into smaller steps. For each step, you need to:\n" +
              "- Write down the task name (\"task\").\n" +
              "- List the tasks that must be finished before this task can start (\"dependencies\").\n" +
              "- If this task must happen one after the other, write \"Sequential\" for concurrency. If it can happen at the same time as other tasks, list those tasks (\"concurrency\").\n" +
              "- Number each task in the order it should happen (\"order\"). Tasks that can happen at the same time should share the same number.\n\n" +
              "Here are the rules you must follow:\n" +
              "1. A task cannot happen at the same time as another task if it depends on that task.\n" +
              "2. Tasks can only happen at the same time if they don’t depend on each other.\n" +
              "3. Tasks at the same level of the process (same \"order\") should either be listed as concurrent or as separate steps in order.\n\n" +
              "Return the result as a JSON array. Each task should look like this:\n" +
              "{\n" +
              "  \"task\": \"Task Name\",\n" +
              "  \"dependencies\": [\"Other Task Name\"],\n" +
              "  \"concurrency\": [\"Another Task Name\" or \"Sequential\"],\n" +
              "  \"order\": Task Number\n" +
              "}\n\n" +
              "Make sure all tasks, dependencies, concurrency, and order are logical and match the process."
            )
          }
        ]
      }
    ]
  };

  try {
    const response = await axios.post(apiUrl, data, { headers });
    return response.data; // Return the response data
  } catch (error) {
    console.error('Error fetching process description:', error);
    throw error;
  }
};

router.post("/chat", async (req, res) => {
  try {
    const { query, location } = req.body;

    // Extract city or other relevant details from the query
    const city = extractCity(query);

    // Fetch data from the database
    // const propertyData = await fetchPropertyData(city);

    // Prepare context for the Gemini API
    // const context = {
    //   query,
    //   location,
    //   propertyData,
    // };

    // Call Gemini API
    const processDescription = await fetchProcessDescriptionFromAPI(query); // Testing the new function
    console.log(processDescription); // Log the response for testing

    // res.json({ reply: geminiResponse.data.message }); // Commented out for testing
    res.json({ reply: processDescription }); // Return the process description for testing
  } catch (error) {
    console.error("Error in chatbot API:", error);
    res.status(500).send("Error processing request");
  }
});

// Utility function to extract city (placeholder)
const extractCity = (query) => {
  // Implement logic to extract city from query
  return "New York";
};

module.exports = router;
