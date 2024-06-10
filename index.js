const express = require("express");
const mongoose = require("mongoose");
const db = require("./keys").DATA_BASE;
const productRoutes = require("./routes/product.route");
const app = express();

mongoose
  .connect(db)
  .then(() => {
    console.log("connected to the database");
  })
  .catch((err) => console.log(err));

//   middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("welcome");
});

app.listen(3000, () => {
  console.log("server running");
});
