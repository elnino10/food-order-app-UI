import React, { useContext, useEffect, useState } from "react";

import Icon from "../cart/Icon";
import CartContext from "../../store/cart-ctx";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const [buttonBump, setButtonBump] = useState(false);
  const cartCtx = useContext(CartContext);

  
  const { items } = cartCtx;

  const cartItemNumber = items.reduce((curNum, item) => {
    return curNum + item.quantity;        /*returns the quantity on cart badge*/
  }, 0)
  
  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setButtonBump(true);
    const bumpTime = setTimeout(() => {
      setButtonBump(false) 
    }, 300);
    return () => {
      clearTimeout(bumpTime)
    }
  }, [items])

  const buttonClass = `${classes.button} ${buttonBump ? classes.bump : ''}`

  return (
    <button className={buttonClass} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes["button-text"]}>Your Cart</span>
      <span className={classes.badge}>{cartItemNumber}</span>
    </button>
  );
};

export default CartButton;

