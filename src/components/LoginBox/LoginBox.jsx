import React from "react";
import "./Login.css";

function loginBox() {
  const Login = () => {};

  return (
    <div className="Wrapper">
      <div className="LoginBox">
        <h1>Login</h1>
        <input type="text" className="UsernameTextField"></input>
        <input type="password" className="PasswordTextField"></input>
        <button className="loginButton" onPress={Login}>
          Login
        </button>
      </div>
    </div>
  );
}

export default loginBox;
