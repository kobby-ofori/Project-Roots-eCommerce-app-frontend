import React, { useState } from "react";
import "./UserAuth.css";
import pexelspixabay1 from "../images/pexelspixabay1.jpg";
import { Container } from "react-bootstrap";
import { useSignup } from "../hooks/useSignup";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  // navigation
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      await signup(email, password);
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
          <form className="signup userauth-input" onSubmit={handleSubmit}>
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
                Sign up
              </button>
              {error && <div className="error">{error}</div>}
            </div>
          </form>
          <br />
          <div className="have-account">
            <span>Already have an Account?</span>
            <br />
            <span>
              <button
                onClick={() => navigate("/login")}
                style={{
                  color: "red",
                  border: "none",
                  backgroundColor: "transparent",
                }}
              >
                Log in
              </button>
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Signup;
