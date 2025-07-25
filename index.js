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

app.get("/food/:category", (req, res) => {
  const category = req.params.category;
  const categoryItems = foodData.filter((item) => item.category === category);
  res.send(categoryItems);
});

app.get("/food/:category/:id", (req, res) => {
  const id = req.params.id;
  const category = req.params.category;
  const categoryItems = foodData.filter((item) => item.category === category);
  const selectedFood = categoryItems.find((c) => c.id == id);

  if (selectedFood) {
    res.send(selectedFood);
  } else {
    res.status(404).send({ message: "Food item not found" });
  }
});

app.get("/chef", (req, res) => {
  res.send(chefData);
});

app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  const selectedChef = chefData.find((chef) => chef.id == id);
  res.send(selectedChef);
});

app.listen(port, () => {
  console.log(`server is running on: ${port}`);
});
