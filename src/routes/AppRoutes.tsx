import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from '../config/layout/DefaultLayout';
import Home from '../pages/Transaction';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<DefaultLayout component={Home} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
