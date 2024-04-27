import React, { useContext, useState } from "react";
import "./Navbars.css";
import { Badge, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { CiUser } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";

// import onlineShopping from "../images/onlineShopping.png";

const Navbars = () => {
  const { cartItems } = useContext(CartContext);
  // Calculate the total number of items in the cart
  const totalCartItems = Object.values(cartItems).reduce(
    (total, amount) => total + amount,
    0
  );

  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  const [backgroundColor, setBackgroundColor] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setBackgroundColor(true);
    } else {
      setBackgroundColor(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <Navbar
      expand="lg"
      className={backgroundColor ? "custom-navbar active" : "custom-navbar"}
      sticky="top"
    >
      <Container fluid>
        <Navbar.Brand href="#" className="brand-detail">
          <Link to="/" className="nav-link-text">
            <span className="brand-name">ROOTS</span>
            {/* <img src={onlineShopping} alt="Home-page-logo" /> */}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Nav.Link href="#action1">
            <Link
              to="/store"
              className={
                backgroundColor ? "nav-link-text active" : "nav-link-text"
              }
            >
              Store
            </Link>
          </Nav.Link>
          <Nav.Link href="#action2" className="nav-link-text">
            <Link
              to="/infosection"
              className={
                backgroundColor ? "nav-link-text active" : "nav-link-text"
              }
            >
              Info-Section
            </Link>
          </Nav.Link>
          {/* {user && (
            <div>
              <span className="user-email">{user.email}</span>
              <button className="logout-button" onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login" className="nav-link-text">
                <CiUser size={24}/>
              </Link>
            </div>
          )} */}

          {user && (
            <NavDropdown
              title={user.email}
              id="basic-nav-dropdown"
              className="user-email nav-link-text"
            >
              <NavDropdown.Item href="#action/3.1">
                <Link to="/post" className="nav-link-text">
                  Post
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <button className="logout-button" onClick={handleClick}>
                  Log out
                </button>
              </NavDropdown.Item>
            </NavDropdown>
          )}
          {!user && (
            <NavDropdown
              title={
                backgroundColor ? (
                  <CiUser color="#fcf803" size={24} />
                ) : (
                  <CiUser size={24} />
                )
              }
              id="basic-nav-dropdown"
              className="nav-link-text"
            >
              <NavDropdown.Item href="#action/3.1">
                <Link to="/post" className="nav-link-text">
                  Post
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                <Link to="/login" className="nav-link-text">
                  Sign in
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                <Link to="/signup" className="nav-link-text">
                  Sign up
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          )}
          {/* <NavDropdown
            title={<CiUser size={24}/>}
            id="basic-nav-dropdown"
            className="nav-link-text"
          >
            <NavDropdown.Item href="#action/3.1">
              <Link to="/login" className="nav-link-text">
                Post
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">
              <Link to="/signup" className="nav-link-text">
                Sign in
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">
              <Link to="/post" className="nav-link-text">
                Sign up
              </Link>
            </NavDropdown.Item>
          </NavDropdown> */}
          <Nav.Link href="#action2" className="nav-link-text">
            <Link to="/cartpage" className="nav-link-text">
              {backgroundColor ? (
                <GiShoppingCart color="#ffff" size={32} />
              ) : (
                <GiShoppingCart size={32} />
              )}
              <Badge variant="secondary">{totalCartItems}</Badge>
            </Link>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
