import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Masters from './Pages/Masters';
import Transactions from './Pages/Transactions';
import Customers from './Pages/Customers';
import Invoices from './Pages/Invoices';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/' element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
        <Route path="/masters" element={<Masters />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/invoices" element={<Invoices />} />
      </Routes>
    </Router>
  );
}

export function ProtectedRoutes(props) {
  if (localStorage.getItem('user')) {
    return props.children
  } else {
    return <Navigate to="/Login" />
  }
}

export default App;


