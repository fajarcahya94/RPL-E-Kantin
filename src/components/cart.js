import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";

const Cart = ({ cart, setCart, handleChange }) => {
  const [harga, setHarga] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handleHarga();
  };

  const handleHarga = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.harga));
    setHarga(ans);
  };

  useEffect(() => {
    handleHarga();
  });

  return (
    <section>
      {cart.map((item) => (
        <Container>
          <div className="cart-box d-flex flex-warp mb-5" key={item.id}>
            <div className="cart-box-img">
              <img className="cart-img" src={item.img} alt={item.nama} />
              <div className="cart-detail d-flex flex-column ps-3 fw-bold">
                <p>{item.nama}</p>
                <span>{item.harga}</span>
              </div>
            </div>
            <div className="cart-btn">
              <Button className="btn-round" onClick={() => handleChange(item, 1)}>
                +
              </Button>
              <Button className="btn-round">{item.amount}</Button>
              <Button className="btn-round" onClick={() => handleChange(item, -1)}>
                -
              </Button>
              <Button className="btn-round" onClick={() => handleRemove(item.id)}>
                x
              </Button>
            </div>
          </div>
        </Container>
      ))}
      <div className="total mt-3 p-3">
        <span>Total Harga </span>
        <span>Rp {harga}</span>
      </div>
    </section>
  );
};

export default Cart;
