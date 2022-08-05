import React, { useContext } from "react";
import CartContext from "../../store/cart-ctx";

import MealForm from "./MealForm";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `#${props.price}`;

  const addItemToCart = (quantity) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      quantity: quantity,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealForm onAddItem={addItemToCart} />
      </div>
    </li>
  );
};

export default MealItem;
