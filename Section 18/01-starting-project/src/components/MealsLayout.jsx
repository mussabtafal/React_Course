import React, { useState, useEffect } from "react";
import { fetchMeals } from "../http";
import MealCard from "./MealCard";

export default function MealsLayout() {
  const [fetching, setIsFetching] = useState(false);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchAllMeals() {
      try {
        const meals = await fetchMeals();
        setMeals(meals);
      } catch {
        console.log("Request was not successfull");
      }
    }
    fetchAllMeals();
  }, []);

  console.log(meals);
  return (
    <div id="meals">
      {meals.map((meal) => {
        return <MealCard
          mealName={meal.name}
          mealImage={meal.image}
          mealPrice={meal.price}
          mealDescription={meal.description}
        />;
      })}
    </div>
  );
}
