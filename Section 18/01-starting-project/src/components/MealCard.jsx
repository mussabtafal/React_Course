import React from "react";
import {currencyFormatter} from '../util/formatter.js'

const MealCard = ({ mealName, mealSource, mealPrice, mealDescription }) => {
  return (
    <div className="meal-item">
      <img src={"http://localhost:3000/" + mealSource} alt={mealName} />
      <h3>{mealName}</h3>
      <div className="meal-item-price">{currencyFormatter.format(mealPrice)}</div>
      <div className="meal-item-description">{mealDescription}</div>
      <div className="meal-item-actions">
        <button className="button">Add to Cart</button>
      </div>
    </div>
  );
};

export default MealCard;
