import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos";
import LoadingPage from "./pages/LoadingPage";
import { CartContextProvider } from "./context/CartContext";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    //initialize AOS
    Aos.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
    //clean up
    return () => {
      Aos.refresh();
    };
  }, []);
  return (
    <div className="App">
      <CartContextProvider>
        <LoadingPage />
      </CartContextProvider>
    </div>
  );
}

export default App;
