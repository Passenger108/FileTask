import React, { useState } from "react";
import "./LoginForm.css"; // CSS for animations and styles

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [shake, setShake] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!email.endsWith("@saini.com")) {
      newErrors.email = "Email must end with @saini.com";
      triggerShake();
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("✅ Login successful:", { email, password });
      // Proceed to login logic...
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="form-group">
        <label>Email
        <input
          type="text"
          className={`input ${errors.email ? "error" : ""} ${shake ? "shake" : ""}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email (e.g. user@saini.com)"
        />
        </label>
        {errors.email && <span className="error-msg">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label>Password
        <input
          type="password"
          className={`input ${errors.password ? "error" : ""}`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        </label>
        {errors.password && <span className="error-msg">{errors.password}</span>}
      </div>

      <button type="submit" className="login-btn">Login</button>
    </form>
  );
};

export default LoginForm;