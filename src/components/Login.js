import React from 'react'
import pokemon from "../img/pokemon.png"

function Login() {
  return (
    <div className="container-login">
        <div className="container-logo">
          {<img src={pokemon} alt="pokemon-logo" />}
        </div>
      <div className="container-form">
        <form className="card p-3 text-center">
          <span>Login </span>
          <input type="text" className="form-control my-3"  placeholder="Your Name..."/>
          <button className="btn mb-3">Go!</button>
        </form>
      </div>
    </div>
  )
}

export default Login
