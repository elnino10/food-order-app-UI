import React, { Fragment } from 'react';

import MealMenu from '../meals/MealMenu';
import MealSummary from '../meals/MealSummary';

const Meals = () => {
    return (
        <Fragment>
            <MealSummary />
            <MealMenu />
        </Fragment>
    );
};

export default Meals;