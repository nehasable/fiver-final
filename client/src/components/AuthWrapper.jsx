import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";
import "./AuthWrapper.css"


function AuthWrapper() {
  const [type, setType] = useState("login");

  const handleChange = (e) => {
    // Handle input change
  };

  const handleClick = () => {
    // Handle button click
  };

  return (
    <div className="auth-wrapper">
      <div className="blur-div"></div>
      <div className="auth-modal">
        <div className="auth-content">
          <h3 className="auth-title">
            {type === "login" ? "Login" : "Sign"} in to Fiverr
          </h3>
          <div className="auth-social">
            <button className="auth-social-btn auth-social-facebook">
              <MdFacebook className="auth-social-icon" />
              Continue with Facebook
            </button>
            <button className="auth-social-btn auth-social-google">
              <FcGoogle className="auth-social-icon" />
              Continue with Google
            </button>
          </div>
          <div className="auth-or">
            <span className="auth-or-line"></span>
            <span className="auth-or-text">OR</span>
          </div>
          <div className="auth-form">
            <input
              type="text"
              name="email"
              placeholder="Email / Username"
              className="auth-input"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              className="auth-input"
              name="password"
              onChange={handleChange}
            />
            <button
              className="auth-button"
              onClick={handleClick}
              type="button"
            >
              Continue
            </button>
          </div>
        </div>
        <div className="auth-switch">
          <span className="auth-switch-text">
            {type === "login" ? "Not a member yet? " : "Already a member? "}
          </span>
          <span className="auth-switch-link">
            {type === "login" ? "Join Now" : "Login Now"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default AuthWrapper;
