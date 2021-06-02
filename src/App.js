import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Login from "./components/Login";
import PokemonId from "./components/PokemonId";
import PokeDex from "./components/PokeDex";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/pokeDex/:id">
            <PokemonId />
          </Route>
          <Route path="/pokeDex">
            <PokeDex />
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
