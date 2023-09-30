const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors"); // Import the cors middleware

// Enable CORS for all routes
app.use(cors());

// Define a route that accepts parameters
app.get('/:param', (req, res) => {
  const { param } = req.params;

  // Construct the URL for your external API with parameters
  const apiUrl = `http://127.0.0.1:8000/echo?msg=${param}`;

  axios.get(apiUrl)
    .then(response => {
      // Send the API response back to the client as JSON
      res.send(response.data);
    })
    .catch(error => {
      // Handle errors here
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

app.listen(3000);
