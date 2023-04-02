import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import {CreateProduct} from './Pages/createProductPage/CreateProduct'
import {LandingPage }from './Pages/LandingPage';

function App() {

  return (
   <Router>
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/createProduct" element={<CreateProduct />} />
    </Routes>
   </Router>
  )
}

export default App
