import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";
import React from "react";
import { CreateProduct } from "./Pages/createProductPage/CreateProduct";
import { LandingPage } from "./Pages/LandingPage";
import StoreManagement from "./components/LandingPage/StoreManagement";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/createProduct" element={<CreateProduct />} />
        <Route path="/store" element={<StoreManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
