import './App.css';
import { useState, useEffect } from "react"
import Login from "./components/Login"
import axios from "axios"

function App() {

  const [pokemons, setPokemons] = useState()

  useEffect(() => {
      const getPokemon = async () => {

        try{

        const getData = await axios(`https://pokeapi.co/api/v2/pokemon`)
        setPokemons(getData.data);
  
      }catch(error){

        console.log(error)
      }
  }

  getPokemon()

}, [])

  console.log(pokemons?.results[2].name)

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
