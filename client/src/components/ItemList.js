import { Button, Card } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ItemList = ({ item }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.rootReducer);
  //update cart handler

  const existingItem = cartItems.find((cartItem) => cartItem._id === item._id);

  const handleAddToCart = () => {
    if (item.quantity < 0) {
      return;
    }
    if (existingItem) {
      dispatch({
        type: "UPDATE_CART",
        payload: { ...item, quantity: existingItem?.stock <= item.quantity ? item.quantity :  existingItem.quantity + 1 },
      });
    } else {
      // If the item is not in the cart, add it with quantity 1
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...item, quantity: 1, stock: item.quantity },
      });
    }
  };

  console.log("cart items", cartItems);

  const { Meta } = Card;
  return (
    <div>
      <Card
        style={{ width: 240, marginBottom: 20 }}
        cover={<img alt={item.name} src={item.image} style={{ height: 200 }} />}
      >
        <Meta title={item.name} />
        <h6>{item.price} taka</h6>
        <div className="item-button">
          <Button onClick={() => handleAddToCart()}>Add to cart</Button>
        </div>
      </Card>
    </div>
  );
};

export default ItemList;
