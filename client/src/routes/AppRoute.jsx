import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}
export default AppRoutes;
