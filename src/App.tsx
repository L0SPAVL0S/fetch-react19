import { use } from "react";
import "./App.css";
import { searchByName } from "./utils/dataFetching";

// Create the promise outside the component to avoid recreating it on every render
const margaritaPromise = searchByName("margarita");

function App() {
  
  const drink = use(margaritaPromise)?.drinks?.[0];
  
  return (
    <div className="App">
        <p>{drink?.strDrink}</p>
    </div>
  );
}

export default App;
