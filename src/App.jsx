import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import ShopContextProvider from "./components/header/ShopProvider";

const App = () => {
  return (
    <>
      <ShopContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ShopContextProvider>
    </>
  );
};

export default App;
