import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'
import FormPage from './pages/Formpage'
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/form' element={<FormPage/>} />
        <Route path='/navbar' element={<Navbar/>} />

      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;

