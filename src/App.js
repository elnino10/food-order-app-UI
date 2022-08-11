import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Meals from "./pages/Meals";
import WelcomePage from "./pages/WelcomePage";
import Auth from "./pages/Auth";
import BlogPage from "./pages/BlogPage";
import SignUp from "./pages/SignUp";
import Layout from "./layout/Layout";
import Header from "./components/header/Header";
import Cart from "./components/cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  const closeCartHandler = () => {
    setShowCart(false);
  };

  const showCartHandler = () => {
    setShowCart(true);
  };

  return (
    <Layout>
        <CartProvider>
          {showCart && <Cart onClose={closeCartHandler} />}
          <Header onShowCart={showCartHandler} />
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/meals" element={<Meals />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/blogs" element={<BlogPage />} />
          </Routes>
        </CartProvider>
    </Layout>
  );
}

export default App;
