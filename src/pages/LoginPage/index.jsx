import React from "react";
import "./styles.css";

const LoginPage = () => {
    return (
        <div id="login">
            <h1 className="title">Portal Escol Sistemas</h1>
            <form className="form">
                <div className="field">
                    <label htmlFor="text">CNPJ</label>
                    <input type="text" id="cnpj"/>
                </div>

                <div className="field">
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password"/>
                </div>
                <div className="actions">
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;