const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const foodData = require("./data/food.json");
const chefData = require("./data/chefs.json");

app.use(cors());

app.get("/food", (req, res) => {
  res.send(foodData);
});

app.get("/chef", (req, res) => {
  res.send(chefData);
});

app.listen(port, () => {
  console.log(`server is running on: ${port}`);
});
