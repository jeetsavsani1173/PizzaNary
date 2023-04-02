import React, { useState } from "react";
import { useFoodcontext } from "../context/FoodContext";
import { useCartContext } from "../context/CartContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import CartItems from "./CartItems";
import Card from "./Card";

const Cart = () => {
  const { foods } = useFoodcontext();
  const { cart, clearCart, total_price } = useCartContext();

  const [show, setShow] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const handleClose = () => {
    setShow(false);
    setSelectedUser(null);
  };
  const handleShow = (item) => {
    setShow(true);
    setSelectedUser(item);
  };

  const handleDelete = () => {
    clearCart();
    handleClose();
  };

  return (
    <>
      <h2 className="d-flex justify-content-center">FOODS</h2>
      <div>
        {foods.map((curElement) => {
          return <Card {...curElement} />;
        })}
      </div>
      <CartItems />
      {cart != null && cart.length > 0 ? (
        <div className="container">
          <div className="row justify-content-center">
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Clearing the Cart!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Are you sure you want to delete All Food Item from Cart?
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="danger" onClick={() => handleDelete()}>
                  Delete
                </Button>
              </Modal.Footer>
            </Modal>
            <button
              className="col-6 btn btn-danger m-1 p-3"
              onClick={() => {
                handleShow();
              }}
            >
              Clear Cart
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="container m-3">
        <div className="row justify-content-center">
          <div className="col-2 p-3">
            <b>SUBTOTAL</b>
          </div>
          <button className="col-2 p-3 btn btn-success text-dark">
            <b>{total_price}</b>
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
