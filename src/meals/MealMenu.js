import React from "react";

import Card from "../components/UI/Card";
import MealItem from "../components/MealItem/MealItem";

import classes from "./MealMenu.module.css";

const MENU = [
  {
    id: "m1",
    name: "Jollof Rice",
    description: "Delicious and great taste!",
    price: 3500,
  },
  {
    id: "m2",
    name: "Bread Fruit",
    description: "A special Nigerian delicacy!",
    price: 4000,
  },
  {
    id: "m3",
    name: "Fish Barbecue",
    description: "Special and tasty!",
    price: 9500,
  },
  {
    id: "m4",
    name: "Fried Rice",
    description: "Healthy...and yummy!",
    price: 3500,
  },
];

const MealMenu = () => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {MENU.map((meal) => (
            <MealItem
              id={meal.id}
              key={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default MealMenu;