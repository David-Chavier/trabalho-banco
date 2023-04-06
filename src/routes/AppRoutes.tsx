import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from '../config/layout/DefaultLayout';
import Transaction from '../pages/Transaction';
import Home from '../pages/Home';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/transaction" element={<DefaultLayout component={Transaction} />} />
        <Route path="/" element={<DefaultLayout component={Home} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
