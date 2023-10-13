import { useState } from "react";
const Header = () => {
  const [toggleLoginButton, setToggleLoginButton] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={require("../../food.jpg")}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button
              onClick={() => {
                toggleLoginButton === "Login"
                  ? setToggleLoginButton("Logout")
                  : setToggleLoginButton("Login");
              }}
              className="login-btn"
            >
              {toggleLoginButton}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
