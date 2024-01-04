import {
  DeleteOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Modal, Select, Table, message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import { loadStripe } from '@stripe/stripe-js';



//import "../styles/CartPage.css";

const CartPage = () => {
  const [subTotal, setSubTotal] = useState(0);
  const [billPopup, setBillPopup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.rootReducer);



  function handleIncrement(record) {
    dispatch({
      type: "UPDATE_CART",
      payload: {
        _id: record._id,
        quantity: record.quantity + 1,
      },
    });
  }

  const handleDecrement = (record) => {
    if (record.quantity > 1) {
      dispatch({
        type: "UPDATE_CART",
        payload: {
          _id: record._id,
          quantity: record.quantity - 1,
        },
      });
    }
  };

  const columns = [
    { title: "Name", dataIndex: "name" },
    {
      title: "Image",
      dataIndex: "image",
      render: (image, record) => (
        <img src={image} alt={record.name} height="60" width="60" />
      ),
    },
    { title: "Price", dataIndex: "price" },
    {
      title: "Quantity",
      dataIndex: "_id",
      render: (id, record) => (
        <div>
          <PlusCircleOutlined
            className="mx-3"
            style={{ cursor: "pointer" }}
            onClick={() => handleIncrement(record)}
          />
          <b>{record.quantity}</b>
          <MinusCircleOutlined
            className="mx-3"
            style={{ cursor: "pointer" }}
            onClick={() => handleDecrement(record)}
          />
        </div>
      ),
    },
    {
      title: "Actions",
      dataIndex: "_id",
      render: (id, record) => (
        <DeleteOutlined
          style={{ cursor: "pointer" }}
          onClick={() =>
            dispatch({
              type: "DELETE_FROM_CART",
              payload: record,
            })
          }
        />
      ),
    },
  ];

  useEffect(() => {
    let temp = 0;
    cartItems.forEach((item) => (temp = temp + item.price * item.quantity));
    setSubTotal(temp);
  }, [cartItems]);

 

  //handleSubmit
  const handleSubmit = async (value) => {
    try {
      const newObject = {
        ...value,
        cartItems,
        subTotal,
        tax: Number(((subTotal / 100) * 15).toFixed(2)),
        totalAmount: Number(
          Number(subTotal) + Number(((subTotal / 100) * 15).toFixed(2))
        ),
        userId: JSON.parse(localStorage.getItem("user"))._id,
      };
      // console.log(newObject);
      await axios.post("/api/bills/add-bills", newObject);
      message.success("Bill Generated");
      navigate("/bills");
    } catch (error) {
      message.error("Something went wrong");
      console.log(error);
    }
  };
  // payment integration
  /* const handleCheckout = async () => {
    try {
      // Check if the selected payment method is 'card'
      const selectedPaymentMethod = Form.getFieldValue('paymentMethode');

      if (selectedPaymentMethod === 'card') {
        const body = {
          products: cartItems,
        };

        const headers = {
          'Content-Type': 'application/json',
        };

        const response = await fetch('http://localhost:4001/api/create-checkout-session', {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(body),
        });

        const session = await response.json();

        const stripe = await loadStripe('process.env.STRIPE_PUBLISH_KEY');
        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });

        if (result.error) {
          console.log(result.error);
        }
      } else {
        // Handle other payment methods or display a message
        console.log('Selected payment method is not "card".');
      }
    } catch (error) {
      console.error(error);
    }

  } */

   //! payment integration
   const makePayment = async()=>{
    const stripe = await loadStripe("pk_test_51OTohFDOydqiFLUW5rblYP2kzhOpiLYcLqXmpSVRQxtoyJlk8agnytKAqd0kcY3h1z9Rj5e6B1NEjXUmcyMYjLxi00LCNplO38");

    const body = {
        products: cartItems
    }
    const headers = {
        "Content-Type":"application/json",
        /* 'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`, */
    }
    const response = await fetch("http://localhost:4001/api/create-checkout-session",{
        method:"POST",
        headers:headers,
        body:JSON.stringify(body)
    });

    const session = await response.json();

    const result = stripe.redirectToCheckout({
        sessionId:session.id
    });
    
    if(result.error){
        console.log(result.error);
    }
}




  return (
    <DefaultLayout>
      <h1>Cart Page</h1>
      <Table columns={columns} dataSource={cartItems} bordered />
      <div className="d-flex flex-column align-items-end">
        <hr />
        <h3>
          SUB TOTAL : BDT <b> {subTotal}</b> /-{" "}
        </h3>
        <Button type="primary" onClick={() => setBillPopup(true)}>
          Create Invoice
        </Button>
         
      </div>
      <Modal
        title="Create Invoice"
        visible={billPopup}
        onCancel={() => setBillPopup(false)}
        footer={false}
      >
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            name="customerName"
            label="Customer Name"
            rules={[{ required: true, message: "Please enter customer name" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="customerNumber"
            label="Contact Number"
            rules={[{ required: true, message: "Please enter contact number" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="paymentMethode"
            label="Payment Methode"
            rules={[{ required: true, message: "Please Enter Payment Option" }]}
          >
            <Select>
              <Select.Option value="cash">Cash</Select.Option>
              <Select.Option value="card">Card</Select.Option>
            </Select>
          </Form.Item>

          <div className="bill-it">
            <h5>
              Sub Total : <b>{subTotal}</b>
            </h5>
            <h5>
              TAX :<b> {((subTotal / 100) * 15).toFixed(2)}</b>
            </h5>
            <h5>
              GRAND TOTAL :{" "}
              <b>
                {Number(subTotal) + Number(((subTotal / 100) * 15).toFixed(2))}
              </b>
            </h5>
          </div>
          <div className="d-flex justify-content-end">
            <Button type="primary" htmlType="submit">
              Generate Bill
            </Button>
            <Button type="primary" onClick={makePayment} >
              Pay
            </Button>
          </div>
        </Form>
      </Modal>
    </DefaultLayout>
  );
};

export default CartPage ;
