// Define the API URL
const apiUrl = 'http://127.0.0.1:8000/echo?msg=heyyy'; // Replace with your API URL

// Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the JSON response
  })
  .then(data => {
    console.log(data.message); // Output the response message
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
