import React, { useRef } from "react";

import Input from "./Input";

import classes from "./MealForm.module.css";

const MealForm = (props) => {
  const inputRef = useRef();

  const addItemToCart = (event) => {
    event.preventDefault();

    const enteredQuantity =
      inputRef.current.value; /*value is a string*/
    const enteredQuantityNum = +enteredQuantity; /*value converted to a number*/

    props.onAddItem(enteredQuantityNum);

    inputRef.current.value = '1'  /*reset input value to 1*/
  };

  return (
    <form className={classes.form} onSubmit={addItemToCart}>
      <Input
        ref={inputRef}
        label="Quantity"
        input={{ id: "quantity_" + props.id, defaultValue: "1", min: "1" }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealForm;
