import React from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import HomePage from './components/Home';
import LoginPage from './components/auth/Login';
import RegisterPage from './components/auth/Register';
import NoMatch from './components/NoMatch';
import DefaultLayout from './components/containers/DefaultLayout';
import ProductsListPage from './components/products/List';
import ProductsCreatePage from './components/products/Create';

function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="products/list" element={<ProductsListPage />} />
        <Route path="products/create" element={<ProductsCreatePage />} />
        
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
   </>
  );
}

export default App;
