import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Login() {
  const { queryData: { email, password }, handleChange, handleSubmit } = useContext(AppContext);
  return (
    <div>
      <h1>Login</h1>
      <form action="" method="post">
        <input type="text" name="email" onChange={handleChange} value={email} />
        <input type="text" name="password" onChange={handleChange} value={password} />
        <button type="button" onClick={handleSubmit}>Enviar</button>
      </form>
    </div>
  );
}

export default Login;
