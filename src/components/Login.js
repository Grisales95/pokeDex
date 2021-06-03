import React from "react";
import pokemon from "../img/pokemon.png";
import { Link } from "react-router-dom";

function Login() {
  const enviar = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container-login">
      <div className="container-logo">
        {<img src={pokemon} alt="pokemon-logo" />}
      </div>
      <div className="container-form">
        <form className="card p-3 text-center" onSubmit={enviar}>
          <span>Login </span>
          <input
            type="text"
            className="form-control my-3"
            placeholder="Your Name..."
            required
          />
          <Link className="btn" to="/pokeDex">
            Go
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
