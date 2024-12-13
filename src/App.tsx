import "./App.css";
import { useState } from "react";

import PokemonCard from "./components/PokemonCard";

function App() {
  

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  const [count, setCount] = useState(0);
  const handleNext = () => {
    if (count < pokemonList.length - 1) {
      setCount(count + 1);
    }
  };

  const handlePrevious = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div>
        <PokemonCard pokemon={pokemonList[count]} />
      </div>
      {count > 0 && (
        <button type="button" onClick={handlePrevious}>
          Précédent
        </button>
      )}
      {count < pokemonList.length - 1 && (
        <button type="button" onClick={handleNext}>
          Suivant
        </button>
      )}
    </>
  );
}

export default App;