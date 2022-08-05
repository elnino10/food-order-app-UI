import React, { useContext } from "react";

import CartContext from "../../store/cart-ctx";
import CartItem from "./CartItem";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const total = cartCtx.totalAmount;
  const addedItems = cartCtx.items;
  const isEmpty = addedItems.length < 1;

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const addItemHandler = (item) => {
    cartCtx.addItem({...item, quantity: 1});
  };

  const cartItems = addedItems.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      name={item.name}
      quantity={item.quantity}
      price={item.price}
      onRemoveItem={removeItemHandler.bind(null, item.id)}
      onAddItem={addItemHandler.bind(null, item)}
    />
  ));

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{total}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {!isEmpty && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
