const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProduct,
  putProduct,
  deleteProduct,
  postProduct,
} = require("../controllers/product.controller");

router.get("/", getProducts);
router.get("/:id", getProduct);
router.put("/:id", putProduct);
router.delete("/:id", deleteProduct);
router.post("/", postProduct);
module.exports = router;
