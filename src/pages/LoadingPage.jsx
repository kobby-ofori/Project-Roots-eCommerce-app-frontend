import React, { useEffect, useState } from "react";
import AppLoading from "../components/AppLoading";
import MainPage from "./MainPage";

const LoadingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 5000); // set the delay time
  }, []);

  return (
    <div className="app">
      {isLoading ? <AppLoading /> : <MainPage />}{" "}
      {/* Render LoadingPage or LandingPage */}
    </div>
  );
};

export default LoadingPage;
