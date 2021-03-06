import React from "react";
import { logoutUser } from "../actions/userActions";
import { Dropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FcShop } from "react-icons/fc";

export default function Navbar() {
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  const dispatch = useDispatch();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow p-3">
        <div className="container">
          <Link className="navbar-brand" bg="primary" to="/">
            <FcShop /> Warung Apnormal
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {currentUser ? (
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    {currentUser.name}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Profil</Dropdown.Item>
                    <Dropdown.Item
                      href="/login"
                      onClick={() => dispatch(logoutUser())}
                    >
                      Keluar
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Link className="nav-link" aria-current="page" to="/login">
                  Masuk
                </Link>
              )}

              <Link className="nav-link" to="/cart">
                Pesanan
                <span className="position-absolute translate-middle badge rounded-pill bg-danger">
                  {cartState.cartItems.length}
                </span>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
