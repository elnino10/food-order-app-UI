import React from 'react';

import classes from './MealSummary.module.css';

const MealSummary = () => {
    return (
        <div className={classes.summary}>
            <h2>Great Taste Made For You</h2>
            <div></div>
            <h1>Forks And Fingers</h1>
        </div>
    );
};

export default MealSummary;