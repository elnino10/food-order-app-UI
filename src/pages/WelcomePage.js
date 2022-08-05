import React, { Fragment, useContext } from "react";
import { Link } from 'react-router-dom';

import MealSummary from "../meals/MealSummary";
import Card from "../components/UI/Card";
import mealTable from '../assets/meal.png';

import classes from "./WelcomePage.module.css";
import { AuthContext } from "../store/auth-ctx";

const WelcomePage = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Fragment>
      <div className={classes["main-image"]}>
        <img src={mealTable} alt="meal-table" />
      </div>
      <div className={classes.welcome}>
        <Card>
          <div className={classes.summary}>
            <MealSummary />
          </div>
          <div className={classes.message}>
            <h2>
              It's really great to have you visiting, we hope to give you an
              awesome experience. Sign in to make an order or continue on our
              blog posts.
            </h2>
            <div className={classes.actions}>
              <Link to='/login'>Login</Link>
              <Link to='/signup'>Sign Up</Link>
            </div>
          </div>
        </Card>
      </div>
    </Fragment>
  );
};

export default WelcomePage;
