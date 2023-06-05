# Backend Assessment 

1. Create an express based node.js server with below requirements. The API should accept names of multiple cities as input and fetch real time weather from any weather API's and respond with real time weather results. Create a POST endpoint /getWeather which accepts the name of the cities as POST body params Example Input { "cities": [ "toronto", "mumbai", "london" ] } Example Output { "weather": { "toronto": "24C", "mumbai": "34C", "london": "14C" } } 

2. Bonus Create a simple UI app which accepts the names of the cities as input in a text box and makes a call to the API endpoint created in #1 and also displays the result in the UI.


## Step 1
Create a new file called config.json and add the following content, replacing YOUR_API_KEY with your actual API key:

```json
{
  "apiKey": "YOUR_API_KEY"
}
```

To get an API Key, create an account at https://www.weatherapi.com/

## Step 2
Install the dependencies and start the server
```
npm install
node index.js
```

The server should now be running on http://localhost:3000, and you can start using the API endpoints.

## Step 3
You can test the server on terminal via a command like

```
curl -X POST -H "Content-Type: application/json" -d '{ "cities": ["delhi"] }' http://localhost:3000/getWeather
```

or you can open index.html on local brower and type in the city name.