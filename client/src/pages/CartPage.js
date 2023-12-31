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
import { loadStripe } from "@stripe/stripe-js";

//import "../styles/CartPage.css";

const CartPage = () => {
  const [subTotal, setSubTotal] = useState(0);
  const [billPopup, setBillPopup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.rootReducer);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('cash'); // Default to 'cash'
  const [paymentSuccess, setPaymentSuccess] = useState(false); // New state
 

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

  //!Handle Clear Cart  button 
  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
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
     // Send a request to add a bill
    const response = await axios.post("/api/bills/add-bills", newObject);

    // Handle the response appropriately (check for success status)
    if (response.status === 200) {
      // Display a success message
      message.success("Bill Generated");

      // Navigate to the /bills page
      navigate("/bills");
    } else {
      // Display an error message
      message.error("Failed to generate the bill");
    }
  } catch (error) {
    // Log the error and display an error message
    console.error("Error creating bill:", error);
    message.error("Something went wrong");
  }
  };

  const handlePaymentMethodChange = (value) => {
    setSelectedPaymentMethod(value);
  };

  const makePayment = async () => {

    if(selectedPaymentMethod === 'card') { 
    try { 
    const stripe = await loadStripe(
      "pk_test_51OTohFDOydqiFLUW5rblYP2kzhOpiLYcLqXmpSVRQxtoyJlk8agnytKAqd0kcY3h1z9Rj5e6B1NEjXUmcyMYjLxi00LCNplO38"
    );

    const body = {
      products: cartItems,
    };
    const headers = {
      "Content-Type": "application/json",
    };
      const response = await fetch(
        "http://localhost:4001/api/create-checkout-session",
        {
          method: "POST",
          headers: headers,
          body: JSON.stringify(body),
        }
      );

      const session = await response.json();

      const result = stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.log(result.error);
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  }
};

  return (
    <DefaultLayout>
      <div className="d-flex justify-content-between">
      <h1>Cart Page</h1>  
      <Button type="primary"  onClick={clearCart} danger>
          Clear Cart
      </Button>
      </div>
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
            name="paymentMode"
            label="Payment Methode"
            rules={[{ required: true, message: "Please Enter Payment Option" }]}
          >
            <Select onChange={handlePaymentMethodChange}>
              <Select.Option value="cash">Cash</Select.Option>
              <Select.Option value="card">Card</Select.Option>
            </Select>
          </Form.Item>
         
            {selectedPaymentMethod === 'card' && !paymentSuccess ? (
              <Button type="primary" onClick={makePayment}>
                Pay
              </Button>
            ) : null}
        

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
          
          </div>
        </Form>
      </Modal>
    </DefaultLayout>
  );
};

export default CartPage;
