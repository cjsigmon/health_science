const express = require("express")
const app = express()
const axios = require("axios")

app.get('/', (req, res) => {
  axios.get("http://127.0.0.1:8000/echo?msg=hellow")
  .then(response => {
    console.log(response);
})
})

app.listen(3000)