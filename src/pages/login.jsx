import logo from './Assets/escol-logo.jpeg'
import './Style.css'

export default login = () => {
  return(
<div className="Container">
<div className="container-login">
  <div className="wrap-login">
    <form classname="login-form">

      <span className="login-form-title">
        <img src={logo} alt="escol-logo"></img>
      </span>

      <div className="wrap-input">
        <input className="input "type="cnpj"></input>
        <span className="focus-input" data-placeholder="Cnpj"></span>
      </div>

      <div className="wrap-input">
        <input className="input" type="password"></input>
        <span className="focus-input" data-placeholder="Email"></span>
      </div>

      <div className="container-login-form-btn">
        <button className="login-form-btn">Entrar</button>
      </div>

    </form>
  </div>
</div>
</div>
  )

}