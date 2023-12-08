import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoadingPage from "./pages/LoadingPage";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <LoadingPage />
      </CartContextProvider>
    </div>
  );
}

export default App;
