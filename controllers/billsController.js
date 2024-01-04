const billsModel = require("../models/billsModel");
const  stripe  = require("./../index.js");

//add items
const addBillsController = async (req, res) => {
  try {
    const newBill = new billsModel(req.body);
    await newBill.save();
    res.send("Bill Created Successfully!");
  } catch (error) {
    res.send("something went wrong");
    console.log(error);
  }
};


//get blls data
const getBillsController = async (req, res) => {
  try {
    const bills = await billsModel.find();
    res.send(bills);
  } catch (error) {
    console.log(error);
  }
};
 
//!ACCEPT PAYMENTS 
const paymentsController = async (req, res) => {
  try {
    //!get amount 
    const {totalAmount } = req.body
    //!validation 
    if(!totalAmount){
      return res.status(404).send({
        success: false, 
        message: 'Total Amount is require'
      })
    }
    const {client_secret} = await stripe.paymentIntents.create({
      amount: Number(totalAmount),
      currencty: ''
    })
    res.status(200).send({
      success: true,
      client_secret,
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: ""
    })
  }
}
module.exports = {
  addBillsController,
  getBillsController,
  paymentsController,
};