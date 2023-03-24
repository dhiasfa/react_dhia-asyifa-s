import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import {CreateProduct} from './Pages/CreateProduct'
import {LandingPage }from './Pages/LandingPage';
// import ProductDetail from './assets/components/ProductDetail';

function App() {

  return (
   <Router>
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/createProduct" element={<CreateProduct />} />
      {/* <Route path="/detailProduct/:id" element={<ProductDetail />} /> */}
    </Routes>
   </Router>
  )
}

export default App
