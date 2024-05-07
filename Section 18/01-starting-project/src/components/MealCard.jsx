import React from 'react'

const MealCard = ({mealName, mealImage, mealPrice, mealDescription}) => {
  console.log("Meal card is working")
  return (
    <div className="meal-item">
      <article>
        <img src={"http://localhost:3000/" + mealImage} alt="picture of meal" />
        <h3>{mealName}</h3>
        <p className="meal-item-price">
          {mealPrice}
        </p>
        <p className="meal-item-description">{mealDescription}</p>
        <button className="button">Add to Cart</button>
      </article>
    </div>
  )
}

export default MealCard