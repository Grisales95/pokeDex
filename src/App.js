import './App.css';
import { useState, useEffect } from "react"
import Login from "./components/Login"
import PokeDex from "./components/PokeDex"
import SearchBox from  "./components/SearchBox"
import ByName from "./components/ByName"
import axios from "axios"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {

  const [pokemons, setPokemons] = useState()

  const [type,setType] = useState("")

  const [name, setName] = useState("")

  const [total, setTotal] = useState("")

  const [A,setA] = useState(0)

  const [B, setB] = useState(8)


  useEffect(() => {
     if(type){
      const getPokemonUrl = async () => {

        try{

        const getData = await axios(`https://pokeapi.co/api/v2/type/${type}`)
        setTotal(getData.data.pokemon)
        setPokemons(getData.data.pokemon.slice(A, B));
  
      }catch(error){

        console.log(error)
      }
     }
     getPokemonUrl()
  }

}, [type, A, B])


const handleNext = () => {
  setA(A + 10);
  setB(B + 10);
};

const handlePrev = () => {
  setA(A - 10);
  setB(B - 10);
};

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
                <Route path="/login">
                    <Login />
                </Route>
              </Switch>
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
                    <div className="d-flex justify-content-center my-3">
                      {A !== 0 && <button className = "btn btn-danger mx-2" onClick={handlePrev}>atras</button>}

                      {B <= total && (
                    <button className = "btn btn-primary" onClick={handleNext}>siguiente</button>
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
