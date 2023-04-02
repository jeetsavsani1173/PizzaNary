import "./App.css";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./components/Home";
import AddFood from "./components/AddFood";
import UpdateFood from "./components/UpdateFood";
import Cart from "./components/Cart";
import logo from "./images/logo.png";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  const userId = localStorage.getItem("userid");
  const handleLogout = () => {
    localStorage.removeItem("userid");
  };

  useEffect(() => {}, [userId]);
  return (
    <div>
      <div>
        <Toaster position="top-right"></Toaster>
      </div>
      <Router>
        <div>
          <h3 className="d-flex justify-content-center m-3">
            <img
              src={logo}
              alt="logo"
              style={{ height: "70px", width: "80px" }}
            />
            &nbsp;
            <h2 className="mt-3">PizzaNary</h2>
          </h3>
          <nav className="navbar navbar-expand">
            <ul className="navbar-nav">
              <li className="nav-item m-1">
                <NavLink className="btn btn-light btn-outline-warning" to="/">
                  Home
                </NavLink>
              </li>
            </ul>
            {userId !== null ? (
              <ul className="navbar-nav">
                <li className="nav-item m-1">
                  <NavLink
                    className="btn btn-light btn-outline-primary"
                    to="/"
                    onClick={handleLogout}
                  >
                    Logout
                  </NavLink>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav">
                <li className="nav-item m-1">
                  <NavLink
                    className="btn btn-light btn-outline-primary"
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
              </ul>
            )}
          </nav>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/addfood" element={<AddFood />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/updatefood/:id" element={<UpdateFood />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
