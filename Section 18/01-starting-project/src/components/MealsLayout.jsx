import React, { useState, useEffect } from "react";
import { fetchMeals } from "../http";
import MealCard from "./MealCard";

export default function MealsLayout() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchAllMeals() {
      try {
        const meals = await fetchMeals();
        console.log(meals);
        setMeals(meals);
      } catch {
        console.log("Request was not successfull");
      }
    }
    fetchAllMeals();
  }, []);

  return (
    <div id="meals">
      {meals.map((meal) => {
        return (
          <MealCard
            key={meal.id}
            mealName={meal.name}
            mealPrice={meal.price}
            mealDescription={meal.description}
            mealSource={meal.image}
          />
        );
      })}
    </div>
  );
}
