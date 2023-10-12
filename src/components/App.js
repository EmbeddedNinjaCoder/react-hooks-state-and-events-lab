import React from "react";
import { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [mood, setMood] = useState(false);

  function handlePress() {
    setMood((mood) => !mood);
    return;
  }

  return (
    <div className={mood ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handlePress}>
          {mood ? "Dark Mode" : "Light Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
