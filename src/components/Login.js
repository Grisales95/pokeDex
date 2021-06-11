import React, { useState } from "react";
import pokemon from "../img/pokemon.png";
import { useHistory} from "react-router-dom";
import { auth } from "../firebase"

function Login() {
  const history = useHistory()
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [msgError, setMsgError] = useState(null)

  const RegisterUser = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, pass)
      .then(r => {
        alert("Usuario registrado")
        history.push("/pokeDex")
      })
      .catch(e => {
        if(e.code === "auth/weak-password"){
          setMsgError("la contraseña debe de tener un minimo de 6 caracteres")
        }
        if(e.code === "auth/invalid-email"){
          setMsgError("Formato de email no valido")
        }
      })
  }

  const loginUser = () => {
    auth.signInWithEmailAndPassword(email, pass)
    .then( r => {
      history.push("/pokeDex")
    })
    .catch((err) => {
      if(err.code === "auth/wrong-password"){
        setMsgError("Contraseña incorrecta")
      }
    })
  }

  return (
    <div className="container-login">
      <div className="container-logo">
        {<img src={pokemon} alt="pokemon-logo" />}
      </div>
      <div className="container-form">
         {
          msgError && 
          <div className="alert alert-danger" role="alert">{msgError}</div>
          }
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
          {/* <Link className="btn" to="/pokeDex">
            Go
          </Link> */}
          <button onClick={() => loginUser()} className="btn">Ingresar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
