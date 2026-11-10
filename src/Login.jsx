import React from 'react'

function Login() {
  return (
    <main className="login-page">
      <form className="log">
        <h1 className="a">Authentification</h1>

        <div className="login-field">
          <label htmlFor="username">Nom d'utilisateur</label>
          <input id="username" name="username" type="text" autoComplete="username" />
        </div>

        <div className="login-field">
          <label htmlFor="password">Mot de passe</label>
          <input id="password" name="password" type="password" autoComplete="current-password" />
        </div>

        <label className="remember-me">
          <input name="remember" type="checkbox" />
          Se souvenir de moi
        </label>

        <button className="login-button" type="submit">Se connecter</button>
        <a className="forgot-password" href="#forgot-password">Mot de passe oublié ?</a>
      </form>
    </main>
  )
}

export default Login