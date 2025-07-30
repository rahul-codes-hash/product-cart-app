import React from 'react'
import Header from './components/Header.jsx'

// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

