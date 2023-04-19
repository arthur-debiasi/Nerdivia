import PropTypes from 'prop-types';
import React, { useState, useMemo, useCallback } from 'react';
import AppContext from './AppContext';
import postLogin from '../axios/postLogin';

function AppProvider({ children }) {
  const [queryData, setQueryData] = useState({
    email: '',
    password: '',
  });
  const handleChange = useCallback(({ target: { name, value } }) => {
    setQueryData({ ...queryData, [name]: value });
  }, [queryData]);

  const handleSubmit = useCallback(async () => {
    const data = await postLogin('/queryData', { queryData });
    console.log(data);
  });
  const contextValue = useMemo(() => ({
    queryData, handleChange, handleSubmit,
  }), [handleChange, queryData, handleSubmit]);
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
