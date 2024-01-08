const express = require("express");
const {
  getItemController,
  addItemController,
  editItemController,
  deleteItemController,
} = require("./../controllers/itemControllers");
const {paymentsController} = require("./../controllers/billsController");

const router = express.Router();


//routes
//Method - get
router.get("/get-item", getItemController);

//MEthod - POST
router.post("/add-item", addItemController);

//method - PUT
router.put("/edit-item", editItemController);

//method - DELETE
router.post("/delete-item", deleteItemController);

// accept payments
router.post('/payments', paymentsController)


 module.exports = router; 