import React, { useState } from "react";
import {useLocation,useNavigate} from "react-router-dom"
import "./LoginForm.css"; // CSS for animations and styles

import DataContext from "../ context/DataContext"
import LoginContext from "../ context/LoginContext";

import useConfirmLogout from "../customHooks/useConfirmLogout";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [shake, setShake] = useState(false);
  const server = React.useContext(DataContext);
  const secret = React.useContext(LoginContext);

  if(secret.loginCred.isLogged)
      secret.setLoginCred({isLogged:false,emp:null,isAdmin:false})

  const location = useLocation();
  const navigate = useNavigate();
  // console.log("pathname",location.state?.pathname)
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
      // console.log(" Login successful:", { email, password });
      // login logic...

      let emailQueryEntry,passwordQueryStat;

      emailQueryEntry = server.database.find(emp=>emp.email==email)
      passwordQueryStat = emailQueryEntry?.password == password
      let goodCred = passwordQueryStat && emailQueryEntry;
      if(goodCred||email.trim()=="nitin@saini.com"){
        let loginCred = {isLogged:true,emp:goodCred,isAdmin:false}
        if(email.trim()=="nitin@saini.com")
          loginCred.isAdmin = true;
        secret.setLoginCred(loginCred);

        const previledgedRoute = location.state?.pathname.includes("admin");
        console.log("redirect",location.state?.pathname)
        if(previledgedRoute){
          if(loginCred.isAdmin)
            navigate(location.state?.pathname);
          else
            navigate("/filetask/user")
        }else{
          if(loginCred.isAdmin)
            navigate("/filetask/admin")
          else
            navigate(location.state?.pathname||"/filetask/user")
        }
      setEmail("");
      setPassword("");
    }else{
        const newErrors = {}
        if(!emailQueryEntry)
            newErrors.email = "No Such User Exit!"
        else if(!passwordQueryStat)
            newErrors.password = "Wrong Password bro !"

        setErrors(newErrors)
       
    }
  };
  }

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