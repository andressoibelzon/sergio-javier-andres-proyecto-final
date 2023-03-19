import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../../styles/login.css";

export const LoginCode = () => {
 const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {actions}=useContext(Context)
  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault()
    let isLogged = await actions.login(email,password);
    if(isLogged){//true
      setEmail("")
      setPassword("")
      navigate("/")
    }
  }

  return (
    <form onSubmit={login}>
      <h1>Login</h1>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          onChange={(e)=>setPassword(e.target.value)}
          value={password}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
