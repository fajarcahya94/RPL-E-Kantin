import React, { useState } from "react";
import "./App.css";
import Cart from "./components/cart";
import HeroSection from "./components/herosection";
import NavigationBar from "./components/navbar";
import GetData from "./feature/getdata";

const App = () => {
  const [show, setShow] = useState(true);

  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <React.Fragment>
      <NavigationBar setShow={setShow} size={cart.length} />
      <HeroSection />
      <h1 className="text-center my-5">Menu</h1>
      {show ? <GetData handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />}
    </React.Fragment>
  );
};

export default App;
