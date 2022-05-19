import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../actions/userActions";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const registerState = useSelector((state) => state.registerUserReducer);
  const { error, loading, success } = registerState;

  const dispatch = useDispatch();

  function register() {
    if (cpassword !== password) {
      alert("Passwords not matched!");
    } else {
      const user = {
        name,
        email,
        password,
      };
      console.log(user);
      dispatch(registerUser(user));
    }
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-4">
            {/* alert loading, success, error */}
            {loading && <Loading />}
            {success && <Success success="Registrasi berhasil" />}
            {error && <Error error="Email telah digunakan" />}

            <h1 className="text-center">Registrasi</h1>
            <form className="mt-3 text-center">
              <input
                type="text"
                placeholder="name"
                className="form-control mt-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="email"
                className="form-control mt-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="password"
                className="form-control mt-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="confirm password"
                className="form-control mt-2"
                value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}
              />
              <button
                className="btn btn-primary mt-3 mb-3 w-100"
                onClick={register}
              >
                Kirim
              </button>
              <br />
              <Link to="/login">kembali ke halaman login</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
