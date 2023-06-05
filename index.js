const express = require('express');
const axios = require('axios');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Read the API key from config.json
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
const apiKey = config.apiKey;
const baseUrl = 'http://api.weatherapi.com/v1';

// API endpoint to fetch weather
app.post('/getWeather', async (req, res) => {
  try {
    const { cities } = req.body;

    const weatherData = await Promise.all(
      cities.map(async (city) => {
        const response = await axios.get(`${baseUrl}/current.json?key=${apiKey}&q=${encodeURIComponent(city)}`);
        return { [city]: response.data.current.temp_c + 'C' };
      })
    );

    const result = weatherData.reduce((acc, curr) => ({ ...acc, ...curr }), {});
    res.json({ weather: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
