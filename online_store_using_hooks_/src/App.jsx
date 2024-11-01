import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Store from "./components/Store";
import Clothes from "./pages/Clothes";
import Devices from "./pages/Devices";
import Electronics from "./pages/Electronics";
import Furniture from "./pages/Furniture";
import HairsTools from "./pages/HairsTools";
import Market from "./pages/Market";
import Tools from "./pages/Tools";
import Toyes from "./pages/toyes";
import Watches from './pages/Watches';
import Login from "./components/Login";
import Cart from "./components/Cart";
import Favourite from "./components/Favourite";
import AppProvider from "./context/AppProvider";
function App() {
  return (
    <div className="App">
      <AppProvider>
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/components/Store" element={<Store />} />
          <Route path="pages/Clothes" element={<Clothes />} />
          <Route path="pages/Devices" element={<Devices />} />
          <Route path="pages/Electronics" element={<Electronics />} />
          <Route path="pages/Furniture" element={<Furniture />} />
          <Route path="pages/HairsTools" element={<HairsTools />} />
          <Route path="pages/Market" element={<Market/>} />
          <Route path="pages/Tools" element={<Tools />} />
          <Route path="pages/toyes" element={<Toyes />} />
          <Route path="pages/Watches" element={<Watches />} />
          <Route path="components/Login" element={<Login />} />
          <Route path="components/Cart" element={<Cart />} />
          <Route path="components/Favourite" element={<Favourite/>} />
        </Routes>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
}

export default App;
