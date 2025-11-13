import { use } from "react";
import "./App.css";
import { searchByName } from "./utils/dataFetching";
import type { Drink } from "./types/drinkType";

import { DrinkCard } from "./components/drinkCard";

// Create the promise outside the component to avoid recreating it on every render
const margaritaPromise = searchByName("margarita");

function App() {
  const data = use(margaritaPromise);
  const drinks = data?.drinks?.slice(0, 5);
  
  return (
    <div className="App">
      {
        drinks?.map((drink: Drink) => {
           return <DrinkCard drink={drink}/>

        })
      }
    </div>
  );
}

export default App;
