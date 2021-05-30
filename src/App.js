import './App.css';
import { useState, useEffect } from "react"
import Login from "./components/Login"
import PokeDex from "./components/PokeDex"
import SearchBox from  "./components/SearchBox"
import axios from "axios"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {

  const [pokemons, setPokemons] = useState()

  const [type,setType] = useState("")

  useEffect(() => {
     if(type){
      const getPokemonUrl = async () => {

        try{

        const getData = await axios(`https://pokeapi.co/api/v2/type/${type}`)
        setPokemons(getData.data.pokemon.slice(0, 8));
  
      }catch(error){

        console.log(error)
      }
     }
     getPokemonUrl()
  }

}, [type])

const colorBackground = {
  fairy:"#EE90E6",
  dark:"#595761",
  dragon:"#0C69C8",
  ice:"#75D0C1",
  psychic:"#FA8581",
  electric:"#F2D94E",
  grass:"#5FBD58",
  water:"#539DDF",
  fire:"#FBA54C",
  steel:"#5695A3",
  ghost:"#5F6DBC",
  bug:"#92BC2C",
  rock:"#C9BB8A",
  ground:"#DA7C4D",
  poison:"#B763CF",
  flying:"#A1BBEC",
  fighting:"#D3425F",
  normal:"#A0A29F"
}


  return (
    <div className="App">
      <Router>
              <Switch>
                <Route path="/login">
                    <Login />
                </Route>
              </Switch>
              <Switch>
                <Route path="/pokeDex">
                  <div className="container-main" style={{background:{colorBackground}}}>
                    <div className="container">
                    <div className="py-4 text-center">
                      <SearchBox handleSearch={setType} />
                    </div>
                    <div className="d-flex flex-wrap py-3 justify-content-center row">
                    {pokemons ? (
                      pokemons.map((poke) => (
                        <PokeDex url={poke.pokemon.url} key={poke.name} />     
                    ))
                    ) : (
                      <h2 className="d-none">Pokemon</h2>
                    )}
                    </div>
                  </div>
                    </div> 
                </Route>
              </Switch>
            </Router>
    </div>
  );
}

export default App;
