const itemModel = require("../models/itemModels");
import  braintree from "braintree";

//payment getway 
var gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.BRAINTREE_MERCHAND_ID,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY,
  privateKey: process.env.BRAINTREE_PRIVATE_KEY,
});



// get items
const getItemController = async (req, res, next) => {
    try {
      const items = await itemModel.find();
      res.status(200).json(items);
    } catch (error) {
      console.error(error);
      next(error); // pass the error to the error handler middleware
    }
  };
  

//add items
const addItemController = async (req, res, next) => {
    try {
      const newItem = await itemModel.create(req.body);
      res.status(201).send("Item created successfully!");
    } catch (error) {
      console.error(error);
      next(error); // pass the error to the error handler middleware
    }
  };

//update item
const editItemController = async (req, res) => {
  try {
    const { itemId } = req.body;
    console.log(itemId);
    await itemModel.findOneAndUpdate({ _id: itemId }, req.body, {
      new: true,
    });

    res.status(201).json("item Updated");
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};
//delete item
const deleteItemController = async (req, res) => {
  try {
    const { itemId } = req.body;
    console.log(itemId);
    await itemModel.findOneAndDelete({ _id: itemId });
    res.status(200).json("item Deleted");
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};

module.exports = {
  getItemController,
  addItemController,
  editItemController,
  deleteItemController,
};