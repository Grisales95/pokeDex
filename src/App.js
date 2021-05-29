import './App.css';
import { useState, useEffect } from "react"
import Login from "./components/Login"
import PokeDex from "./components/PokeDex"
import SearchBox from  "./components/SearchBox"
import axios from "axios"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {

  const [pokemons, setPokemons] = useState()

  useEffect(() => {
      const getPokemonUrl = async () => {

        try{

        const getData = await axios(`https://pokeapi.co/api/v2/pokemon`)
        setPokemons(getData.data.results);
  
      }catch(error){

        console.log(error)
      }
  }

  getPokemonUrl()

}, [])

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
                  <div className="container">
                    <div className="my-4 text-center">
                      <SearchBox />
                    </div>
                    <div className="d-flex flex-wrap my-3 justify-content-center row">
                    {pokemons ? (
                      pokemons.map((poke) => (
                        <PokeDex url={poke.url} key={poke.name} />     
                    ))
                    ) : (
                      <h2 className="d-none">Pokemon</h2>
                    )}
                    </div>
                  </div>
                </Route>
              </Switch>
            </Router>
    </div>
  );
}

export default App;
