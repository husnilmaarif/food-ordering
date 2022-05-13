import React from "react";
import "./style.css";

function LoginInstagram() {
  return (
    <>
      <div className="container-1">
        <table style={{ width: "80%" }}>
          <center>
            {/* <img src="img/instagram.png" alt="Instagram" width="300px" className="instagram" /> */}
            <form>
              <input className="input" type="text" value="email" style="margin-bottom: 5px;" />
              <input className="input" type="text" value="Password" />
              <br />
              <br />
              <button type="submit" className="login">
                Log In
              </button>
            </form>
            <br />
            <br />
            <hr />
            <br />
          </center>
        </table>
        <div className="facebook">
          {/* <img src="img/facebook.png" alt="facebook" className="facebook" /> */}
          <p>
            <b>Log In With Facebook</b>
          </p>
        </div>
        <p className="forgot-pass">Forgot password?</p>
      </div>

      <div className="container-2">
        <center>
          <p className="signup">
            Belum punya akun? Silahkan{" "}
            <a href="/register">
              <b>Registrasi</b>
            </a>
          </p>
        </center>
      </div>

      <div style={{ marginTop: "30px" }}>
        <center>
          <p>Get the app</p>
          {/* <img src="img/googleplay.png" alt="google play" style={{ padding: "20px" }} /> */}
        </center>
      </div>
    </>
  );
}

export default LoginInstagram;
