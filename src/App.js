import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard'
import Addbook from './components/Addbook';
import Updatebook from './components/Updatebook';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/addbook" element={<Addbook />} />
      <Route path="/updatebook/:id" element={<Updatebook />} />
    </Routes>
  );
};

export default App;
