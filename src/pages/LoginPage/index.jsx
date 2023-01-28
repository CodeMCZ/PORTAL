import React, { useState, useContext } from 'react';

import { AuthContext } from '../../contexts/auth';

import './styles.css';

const LoginPage = () => {
	const { authenticated, login } = useContext(AuthContext);

	const [cnpj, setCnpj] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		login(cnpj, password); //integração com meu contexto
	};
	return (
		<div id="login">
			<h1 className="title">Portal</h1>
       <img src='../src/Assets/escol_logo.png'/>
			<form className="form" onSubmit={handleSubmit}>
				<div className="field">
					<label htmlFor="text">CNPJ</label>
					<input
						type="text"
						id="cnpj"
						value={cnpj}
						onChange={e => setCnpj(e.target.value)}
					/>
				</div>

				<div className="field">
					<label htmlFor="password">Senha</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
				</div>
				<div className="actions">
					<button type="submit">Entrar</button>
				</div>
			</form>
		</div>
	);
};

export default LoginPage;
