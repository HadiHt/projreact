import React from "react";
import "./Register.css";

function registerBox() {
  const Register = () => {};

  return (
    <div className="Wrapper">
      <div className="RegisterBox">
        <h1>Register</h1>
        <input type="text" className="UsernameTextField"></input>
        <input type="password" className="PasswordTextField"></input>
        <button className="RegisterButton" onPress={Register}>
          Create Account
        </button>
      </div>
    </div>
  );
}

export default registerBox;
