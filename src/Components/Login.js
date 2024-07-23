import React, { useState } from "react";
import "./Login.css";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateEmail = (email) => {
    // Simple regex for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    // Example password requirements: minimum 6 characters
    return password.length >= 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a successful login
    e.preventDefault();

    let emailError = "";
    let passwordError = "";

    if (!validateEmail(email)) {
      emailError = "Invalid email format";
    }

    if (!validatePassword(password)) {
      passwordError = "Password must be at least 6 characters long";
      console.log("Error in password");
    }

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
    } else {
      localStorage.setItem("token", "fake-jwt-token");
      setIsLoggedIn(true);
      console.log("Form submitted with:", { email, password });
    }
  };
  //React action
  return (
    <div className="login-wrapper">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
