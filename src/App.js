import "./styles.css";
import "./App.css";
import { useState, React } from "react";

export default function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [Error, setInputError] = useState(false);

  function loginHandle(e) {
    let error = "Error: All fields are mandatory";
    let noError = "Successfully Signed Up!";

    if (
      user.length < 1 ||
      email.length < 1 ||
      !email.includes("@") ||
      !email.includes(".") ||
      password.length < 1 ||
      !(password === confirmPassword)
    ) {
      setInputError(error);
    } else {
      setInputError(noError);
    }
  }
  function usernameChange(e) {
    let item = e.target.value;

    setUser(item);
  }
  function emailChange(e) {
    let item = e.target.value;

    setEmail(item);
  }
  function passwordChange(e) {
    let item = e.target.value;

    setPassword(item);
  }
  function confirmPasswordChange(e) {
    let item = e.target.value;

    setConfirmPassword(item);
  }

  return (
    <div className="App">
      <h1 style={{ color: "white" }}>Signup</h1>
      <input
        type="text"
        placeholder="Full Name"
        name="username"
        onChange={usernameChange}
      />
      <hr />
      <input
        type="email"
        placeholder="Email"
        name="email"
        onChange={emailChange}
      />
      <hr />
      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={passwordChange}
      />
      <hr />
      <input
        type="password"
        placeholder="Confirm Password"
        name="confirmpassword"
        onChange={confirmPasswordChange}
      />
      <hr />

      <div id="popup">{Error}</div>

      <div id="btn_container">
        <button className="btn" id="btn1" onClick={loginHandle}>
          Signup
        </button>
      </div>
    </div>
  );
}
