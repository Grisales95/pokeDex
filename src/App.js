import './App.css';
import { useState, useEffect } from "react"
import Login from "./components/Login"
import PokeDex from "./components/PokeDex"
import SearchBox from  "./components/SearchBox"
import ByName from "./components/ByName"
import axios from "axios"
import PokemonId from "./components/PokemonId"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {

  var page = 4;

  const [pokemons, setPokemons] = useState("")

  const [type,setType] = useState("")

  const [name, setName] = useState("")

 const [total, setTotal] = useState("")

  useEffect(() => {
     if(type){
      const getPokemonUrl = async () => {

        try{

        const getData = await axios(`https://pokeapi.co/api/v2/type/${type}`)
        setPokemons(getData.data.pokemon)
        setTotal(pokemons.length)
    
  
      }catch(error){

        console.log(error)
      }
     }
     getPokemonUrl()
  }

}, [type])

const pages = Math.ceil(total / page)

  console.log(total)

const [pokemonN,setPokemonN] = useState("")

useEffect(()=>{
  if(name){

   const getPokemonByName = async () => {
    
    try{

      const getData = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`)
      setPokemonN(getData.data)

    }catch(error){

      console.log(error)
    }
   }
   getPokemonByName()

  }
},[name])


  return (
    <div className="App">
      <Router>
              <Switch>
                <Route path="/pokeDex">
                  <div className="container-main">
                    <div className="container">
                    <div className="py-4 text-center">
                      <SearchBox handleSearch={setType} setName={setName} />
                    </div>
                    <div className="d-flex flex-wrap py-3 justify-content-center row">
                        <ByName pokemon = {pokemonN} />
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
                <Route path="/pokeDex/:id" render={() => <PokemonId />}>
                  <PokemonId />
                </Route>
                <Route path="/">
                    <Login />
                </Route>
              </Switch>
            </Router>
    </div>
  );
}

export default App;
