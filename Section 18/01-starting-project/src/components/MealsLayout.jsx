import { fetchMeals } from "../http"

export default function MealsLayout() {

    const meals = fetchMeals();
    console.log(meals)

    return (
        <div id="meals">
            This is just a test
        </div>
    )
}