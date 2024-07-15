import React from 'react'

const botonIngresar = document.getElementById('botonIngresar');
const mensaje = document.getElementById('mensaje');
let nombre = prompt('ingrese su usuario');


const Login = () => {
  return (
    <div>
      <form class="login-form">
      <h2>Iniciar Sesión</h2>
      <div class="form-group">
        <label for="username">Usuario:</label>
        
      </div>
      <div class="form-group">
        <label for="password">Contraseña:</label>
        
      </div>
      <button type="submit">Iniciar Sesión</button>
    </form>
    </div>
  )
}

export default Login

