import React, { useState } from "react";
import "./UserAuth.css";
import pexelspixabay1 from "../images/pexelspixabay1.jpg";
import google from "../images/google.png";
import facebook from "../images/facebook.png";
import linkedin from "../images/linkedin.png";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  // define useNavigate as navigate to navigate to signup page
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  // const [valid, setValid] = useState(false);
  // const checkInputValidity=()=>{
  //   if (email) {
  //     setValid(true);
  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      await login(email, password);
    } else if (!email && !password) {
      alert("enter valid email & password to continue");
    } else if (!email) {
      alert("enter valid email to continue");
    } else if (!password) {
      alert("enter valid password to continue");
    }
  };

  return (
    <Container className="userauth-body" fluid>
      <div className="userauth-container" id="container">
        <div className="img">
          <img src={pexelspixabay1} alt="" className="userauth-card-img" />
        </div>
        <div className="userauth-details">
          <form className="login userauth-input" onSubmit={handleSubmit}>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="input-email"
              placeholder="email"
              className="userauth-card-input"
            />

            <br />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              id="input-password"
              placeholder="password"
              className="userauth-card-input"
            />

            <div className="userauth-btn">
              <button
                disabled={isLoading}
                className="userauth-card-button sign-in"
                id="sign-in"
              >
                Log in
              </button>
              {error && <div className="error">{error}</div>}
            </div>
          </form>

          <h3 className="userauth-card-h3">Log-In with</h3>
          <hr className="userauth-card-hr" />
          <div className="icons" id="icons">
            <a
              href="altlink"
              target="_blank"
              className="login-links"
              id="login-link1"
            >
              <img src={google} className="icon-img" alt="" />
            </a>
            <a
              href="altlink"
              target="_blank"
              className="login-links"
              id="login-link2"
            >
              <img src={facebook} className="icon-img" alt="" />
            </a>
            <a
              href="altlink"
              target="_blank"
              className="login-links"
              id="login-link3"
            >
              <img src={linkedin} className="icon-img" alt="" />
            </a>
          </div>
          <div className="create-account">
            <span>Don't have an account?</span>
            <br />
            <span>
              <button
                onClick={() => navigate("/signup")}
                style={{
                  color: "red",
                  border: "none",
                  backgroundColor: "transparent",
                }}
              >
                Create an Account
              </button>
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
