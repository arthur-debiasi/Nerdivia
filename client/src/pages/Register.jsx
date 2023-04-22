import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Register() {
  const {
    queryData: { email, password, name },
    handleChange,
    handleRegister,
  } = useContext(AppContext);
  return (
    <div>
      <h1>Register</h1>
      <form action="" method="post">
        <label htmlFor="name-input">
          Nome:
          {' '}
          <input id="name-input" type="text" name="name" onChange={handleChange} value={name} />
        </label>
        <label htmlFor="email-input">
          Email:
          {' '}
          <input id="email-input" type="email" name="email" onChange={handleChange} value={email} />
        </label>
        <label htmlFor="password-input">
          Senha:
          {' '}
          <input type="password" name="password" onChange={handleChange} value={password} />
        </label>
        <button type="button" onClick={handleRegister}>Criar</button>
      </form>
    </div>
  );
}

export default Register;
