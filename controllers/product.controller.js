const Model = require("../Modles/modle");
const getProducts = async (req, res) => {
  try {
    const products = await Model.find({});
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Model.findById(id);
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const putProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Model.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(404).json({ message: "Product not exist" });
    }

    const updateProduct = await Model.findById(id);
    res.status(200).json(updateProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Model.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const postProduct = async (req, res) => {
  try {
    const product = await Model.create(req.body);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getProducts,
  getProduct,
  putProduct,
  deleteProduct,
  postProduct,
};
