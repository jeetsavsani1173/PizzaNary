import React, { useEffect, useState } from "react";
import { useFoodcontext } from "../context/FoodContext";
import { FaTrash, FaEdit } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Home = () => {
  const userId = localStorage.getItem("userid");
  const { foods, deletefood } = useFoodcontext();

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

  const handleDelete = (id) => {
    deletefood(id);
    handleClose();
  };

  useEffect(() => {}, [userId]);
  return (
    <>
      <div className="d-flex justify-content-around p-2">
        <NavLink className="btn btn-light btn-outline-success" to="/addfood">
          ADD FOOD
        </NavLink>
        <NavLink className="btn btn-light btn-outline-dark" to="/cart">
          ADD ORDER
        </NavLink>
      </div>

      <h2 className="d-flex justify-content-center">Food's Item</h2>
      <div className="container">
        <div className="row">
          {foods.map((curElement) => {
            return (
              <>
                <div className="col-md-4 col-lg-3 col-sm-6 m-3">
                  <div
                    class="card"
                    style={{
                      width: "18rem",
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                    }}
                  >
                    <img
                      src={curElement.image}
                      class="card-img-top"
                      alt=".."
                      style={{ height: "288px", width: "288px" }}
                    />
                    <div class="card-body">
                      <div className="d-flex justify-content-between mt-2">
                        <h5 className="card-title m-2">{curElement.name}</h5>
                        <button className="col-3 btn btn-dark m-1 mb-4">
                          {curElement.price}
                        </button>
                      </div>
                      <div className="d-flex justify-content-between m-1">
                        <NavLink
                          className="col-5 btn btn-light btn-outline-primary m-1"
                          to={`/updatefood/${curElement.id}`}
                        >
                          Update
                        </NavLink>
                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Deleting The Food</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            Are you sure you want to delete this Food Item ?
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              Close
                            </Button>
                            <Button
                              variant="danger"
                              onClick={() => handleDelete(selectedUser)}
                            >
                              Delete
                            </Button>
                          </Modal.Footer>
                        </Modal>
                        <button
                          className="col-5 btn btn-light btn-outline-danger m-1"
                          onClick={() => handleShow(curElement.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;

{
  /* <div class="card" style="width: 18rem;">
  <img src={curElement.image} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{curElement.name}</h5>
  </div>
</div>  */
}
