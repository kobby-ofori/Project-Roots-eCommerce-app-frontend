import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import ErrorPage from "../pages/ErrorPage";
import PostProduct from "../userAdmin/PostProduct";
import InfoSection from "../pages/InfoSection";
import LandingPage from "../pages/LandingPage";
import Store from "../pages/Store";
import CartPage from "../pages/CartPage";
import Signup from "../userAdmin/Signup";
import Login from "../userAdmin/Login";
import { useAuthContext } from "../hooks/useAuthContext";

const Router = () => {
  //NEW CODE
  const { user } = useAuthContext();
  //END OF NEW CODE

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/store" element={<Store />} />
      <Route path="/infosection" element={<InfoSection />} />
      <Route
        path="/post"
        element={user ? <PostProduct /> : <Navigate to="/login" />}
      />
      <Route
        path="/login"
        element={!user ? <Login /> : <Navigate to="/store" />}
      />
      <Route
        path="/signup"
        element={!user ? <Signup /> : <Navigate to="/store" />}
      />
      <Route path="/cartpage" element={<CartPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
