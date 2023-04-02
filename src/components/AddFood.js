import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useFoodcontext } from "../context/FoodContext";
import { toast } from "react-hot-toast";
import logo from "../images/logo.png";

const initialfood = {
  name: "",
  price: 0,
  image: "",
};

const AddFood = () => {
  const { addfood } = useFoodcontext();

  const [food, setfood] = useState(initialfood);

  const handleChange = (e) => {
    setfood((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddfood = (food) => {
    addfood(food);
    toast.success("Food Added Successfully");
  };

  return (
    <>
      <h2 className="d-flex justify-content-center">ADD FOOD ITEM</h2>
      <div className="container m-3">
        <div className="row m-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
          <div className="col-4 d-flex">
            <img
              src={logo}
              style={{ width: "100%", height: "auto" }}
              className="mx-0"
              alt=""
            ></img>
          </div>
          <div className="col-8">
            <form>
              <div class="mb-3 row">
                <label for="a" class="col-3 col-form-label">
                  Pizza Name
                </label>
                <div class="col-8">
                  <input
                    type="text"
                    class="form-control"
                    id="a"
                    name="name"
                    onChange={handleChange}
                    value={food.name}
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="b" class="col-3 col-form-label">
                  price
                </label>
                <div class="col-8">
                  <input
                    type="number"
                    class="form-control"
                    id="b"
                    name="price"
                    onChange={handleChange}
                    value={food.price}
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="f" class="col-3 col-form-label">
                  imageurl
                </label>
                <div class="col-8">
                  <input
                    type="text"
                    class="form-control"
                    id="f"
                    name="image"
                    onChange={handleChange}
                    value={food.image}
                  />
                </div>
              </div>

              <NavLink
                className="btn btn-primary shadow d-block w-100"
                type="button"
                to="/"
                onClick={() => handleAddfood(food)}
              >
                ADD
              </NavLink>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="container m-3">
        <form>
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={handleChange}
              value={food.name}
              placeholder="Food name"
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="number"
              name="price"
              placeholder="Enter price"
              onChange={handleChange}
              value={food.price}
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              name="image"
              onChange={handleChange}
              value={food.image}
              placeholder="Food image url"
            />
          </div>
          <div className="mb-3">
            <NavLink
              className="btn btn-primary shadow d-block w-100"
              to="/"
              type="button"
              onClick={() => handleAddfood(food)}
            >
              ADD
            </NavLink>
          </div>
        </form>
      </div> */}
    </>
  );
};

export default AddFood;
