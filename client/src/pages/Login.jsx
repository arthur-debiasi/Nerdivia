import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';

function Login() {
  const {
    queryData: { email, password },
    handleChange,
    handleSubmit,
  } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div>
      <h1>Login</h1>
      <form action="" method="post">
        <label htmlFor="email-input">
          Email:
          {' '}
          <input type="text" name="email" onChange={handleChange} value={email} />
        </label>
        <label htmlFor="password-input">
          Senha:
          {' '}
          <input type="text" name="password" onChange={handleChange} value={password} />
        </label>
        <button type="button" onClick={handleSubmit}>Entrar</button>
        <button type="button" onClick={() => navigate('/register')}>Criar uma nova conta</button>
      </form>
    </div>
  );
}

export default Login;
