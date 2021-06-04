import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Login from "./components/Login";
import PokemonId from "./components/PokemonId";
import PokeDex from "./components/PokeDex";
import Error404 from "./components/Error404";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/pokeDex/:id">
            <PokemonId />
          </Route>
          <Route path="/pokeDex" exact>
            <PokeDex />
          </Route>
          <Route path="/">
            <Login />
          </Route>
          <Route
            path="*"
            render={() => (
              <Error404
                msg={"Uh oh, you seem lost on your journey!"}
                linkTo={"/"}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
