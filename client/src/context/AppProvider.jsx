import PropTypes from 'prop-types';
import React, { useState, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from './AppContext';
import post from '../services/postLogin';

function AppProvider({ children }) {
  const navigate = useNavigate();
  const [queryData, setQueryData] = useState({
    email: '',
    password: '',
    name: '',
  });
  const handleChange = useCallback(({ target: { name, value } }) => {
    setQueryData({ ...queryData, [name]: value });
  }, [queryData]);

  const handleSubmit = useCallback(async () => {
    const data = await post('/login', { queryData });
    console.log(data);
    navigate('/home');
  });

  const handleRegister = useCallback(async () => {
    const data = await post('/register', queryData);
    console.log(data);
    navigate('/home');
  });
  const contextValue = useMemo(() => ({
    queryData, handleChange, handleSubmit, handleRegister,
  }), [handleChange, queryData, handleSubmit, handleRegister]);
  return (
    <AppContext.Provider
      value={contextValue}
    >
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppProvider;
