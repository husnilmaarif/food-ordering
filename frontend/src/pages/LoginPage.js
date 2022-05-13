import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../actions/userActions";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  function login() {
    const user = {
      email,
      password,
    };
    console.log(user);
    dispatch(loginUser(user));
  }

  return (
    <>
      <div className="row justify-content-center mt-5">
        <div className="col-md-4">
          <h1 className="text-center">Login</h1>
          <form className="mt-3">
            <input type="email" placeholder="email" className="form-control m-2" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="password" className="form-control m-2" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className="btn btn-primary mt-3 col-md-4" onClick={login}>
              Masuk
            </button>
          </form>
          <p className="mt-2">
            belum punya akun? silahkan{" "}
            <a>
              <Link to="/register">registrasi</Link>
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
