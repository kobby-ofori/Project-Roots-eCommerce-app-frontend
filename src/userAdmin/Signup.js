// import { useState } from "react";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     console.log(email, password);
//   };

//   return (
//     <form className="signup" onSubmit={handleSubmit}>
//       <h3>Sign up</h3>

//       <label>Email:</label>
//       <input
//         type="email"
//         onChange={(e) => setEmail(e.target.value)}
//         value={email}
//       />

//       <label>Password:</label>
//       <input
//         type="password"
//         onChange={(e) => setPassword(e.target.value)}
//         value={password}
//       />

//       <button>Sign up</button>
//     </form>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import "./UserAuth.css";
import pexelspixabay1 from "../images/pexelspixabay1.jpg";
import { Container } from "react-bootstrap";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
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
        </div>
      </div>
    </Container>
  );
};

export default Signup;
