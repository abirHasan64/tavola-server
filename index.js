const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
const data = require('./data/food.json')
app.get('/', (req, res) => {
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})