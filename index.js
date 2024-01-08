const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDb = require('./config/connectDb');
const itemRoutes = require('./routes/itemRoutes');
const userRoutes = require('./routes/userRoute');
const billsRoutes = require('./routes/billsRoute');
const path = require("path");
const app = express();
const  stripe  = require('stripe')("sk_test_51OTohFDOydqiFLUWbucp8sjgvilWpjoXwWoPuXW0w3FcPOk0tvVe6agq8Gf0HySDpBVTvIYeiRHKzPxC6YxmUzN900e6sDJXOj");


dotenv.config();
connectDb();



//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use('/api/items', itemRoutes);
app.use("/api/users", userRoutes);
app.use("/api/bills", billsRoutes);




//!stripe configuration
//! checkout api
app.post("/api/create-checkout-session",async(req,res)=>{
  const {products} = req.body;


  const lineItems = products.map((product)=>({
      price_data:{
          currency:"BDT",
          product_data:{
              name:product.name,
              images:[product.image]
          },
          unit_amount:product.price * 100,
      },
      quantity:product.quantity
  }));

  const session = await stripe.checkout.sessions.create({
      payment_method_types:["card"],
      line_items:lineItems,
      mode:"payment",
      success_url:"http://localhost:4001/sucess",
      cancel_url:"http://localhost:4001/cancel",
  });

  res.json({id:session.id})

})


 //! static files
 app.use(express.static(path.join(__dirname,'./client/build'))) 


 app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, './client/build/index.html'))
}) 

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

