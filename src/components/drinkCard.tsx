import type { Drink } from "../types/drinkType"
import styles from "./drinkCard.module.css"

interface props {
    drink: Drink
}

export function DrinkCard({drink}: props) {

    return (
      <>
        <h3>
            {drink.strDrink}
        </h3>
        <img className="styles" src={drink.strDrinkThumb}/>
      </>  
    )
}