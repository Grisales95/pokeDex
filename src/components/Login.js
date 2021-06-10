import React, { useState } from "react";
import pokemon from "../img/pokemon.png";
import { Link } from "react-router-dom";
import { auth } from "../firebase"

function Login() {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [msgError, setMsgError] = useState("")

  const RegisterUser = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, pass)
      .then(r => alert("Usuario registrado"))
      .catch(e => {
        if(e.code === "auth/weak-password"){
          setMsgError("la contraseña debe de tener como minimo 6 caracteres")
        }
      })
  }

  return (
    <div className="container-login">
      <div className="container-logo">
        {<img src={pokemon} alt="pokemon-logo" />}
      </div>
      <div className="container-form">
        <form className="card p-3 text-center" onSubmit={RegisterUser}>
          <span>Login </span>
          <input
            onChange = {(e)=> {setEmail(e.target.value)}}
            type="email"
            className="form-control my-3"
            placeholder="Your Email..."
            required
          />
          <input
            onChange = {(e)=> {setPass(e.target.value)}}
            type="password"
            className="form-control my-3"
            placeholder="Your Password..."
            required
          />
          <button className="btn my-2" type="submit">Registrar usuario</button>
          <Link className="btn" to="/pokeDex">
            Go
          </Link>
        </form>
        {
          msgError && 
          <div className="alert alert-danger" role="alert">{msgError}</div>
        }
      </div>
    </div>
  );
}

export default Login;
