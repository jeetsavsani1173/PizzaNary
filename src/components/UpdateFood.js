import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

const foodInit = {
  id: 0,
  name: "",
  price: 0,
  image: "",
};

const UpdateFood = () => {
  const { id } = useParams();
  const [food, setFood] = useState(foodInit);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getFood(id) {
      //let data;
      axios
        .get(`https://localhost:7281/api/pizzaItems/${id}`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((res) => {
          console.log(res.data);
          //data = res.data.food;
          setFood(res.data);
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status === 401) {
            console.log("Something went wrong");
          }
        });
    }
    getFood(id);
  }, [id]);
  const updateFood = (par) => {
    setFood({ ...food, ...par });
  };

  const handleSubmit = (event) => {
    //event.preventDefault();
    setIsLoading(true);
    console.log(id);
    axios
      .put(`https://localhost:7281/api/pizzaItems/${id}`, food, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const food = response.data;
        console.log(food);
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 401) {
          console.log("Something went wrong");
        }
      });
    setIsLoading(false);
  };

  return (
    <>
      <h2 className="d-flex justify-content-center">UPDATE FOOD ITEM</h2>
      {/* <div className="container m-3">
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label labelfor="name">Food name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="nameHelp"
              placeholder="Enter food name"
              autoFocus
              value={food.name}
              onChange={(e) => updateFood({ name: e.target.value })}
              required
            />
            <small id="nameHelp" className="form-text text-muted">
              Atleast 3 character.
            </small>
          </div>

          <div className="form-group mb-3">
            <label labelfor="image">Image url</label>
            <input
              type="text"
              className="form-control"
              id="image"
              aria-describedby="imageurlHelp"
              placeholder="Enter image url"
              autoFocus
              value={food.image}
              onChange={(e) => updateFood({ image: e.target.value })}
              required
            />
            <small id="imageurlHelp" className="form-text text-muted">
              Atleast 3 character.
            </small>
          </div>
          <div className="form-group mb-3">
            <label labelfor="price">Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              aria-describedby="priceHelp"
              min={0}
              max={1000}
              placeholder="Price"
              value={food.price}
              onChange={(e) => updateFood({ price: e.target.value })}
            />
            <small id="priceHelp" className="form-text text-muted">
              Enter valid food price.
            </small>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block mb-3"
            onClick={handleSubmit}
          >
            UPDATE
          </button>
        </form>
      </div> */}
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
            <form onSubmit={handleSubmit}>
              >
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
                    onChange={(e) => updateFood({ name: e.target.value })}
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
                    onChange={(e) => updateFood({ price: e.target.value })}
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
                    onChange={(e) => updateFood({ image: e.target.value })}
                    value={food.image}
                  />
                </div>
              </div>
              <NavLink
                className="btn btn-primary shadow d-block w-100"
                type="button"
                to="/"
                onClick={() => handleSubmit(food)}
              >
                Update
              </NavLink>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateFood;
