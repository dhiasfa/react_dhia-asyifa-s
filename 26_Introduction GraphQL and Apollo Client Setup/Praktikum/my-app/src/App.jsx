import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";
import React from "react";
import { CreateProduct } from "./Pages/createProductPage/CreateProduct";
import { LandingPage } from "./Pages/LandingPage";
import Login from "./Pages/LoginPage/Login";
function App() {
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={isLoggedIn ? <LandingPage /> : <Login />} />
    //     <Route
    //       path="/createProduct"
    //       element={isLoggedIn ? <CreateProduct /> : <Login />}
    //     />
    //   </Routes>
    // </Router>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        {isLoggedIn ? (
          <>
            <Route path="/landingPage" element={<LandingPage />} />
            <Route path="/createProduct" element={<CreateProduct />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
