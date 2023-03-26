import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../../styles/login.css";

export const LoginCode = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { actions } = useContext(Context)
  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault()
    let isLogged = await actions.login(email, password);
    if (isLogged) {//true
      setEmail("")
      setPassword("")
      navigate("/")
    }
  }

  return (
    <div class="container py-5 w-25 mx-auto">
      <form class="p-4 border rounded shadow-sm " onSubmit={login}>
        <h1 class="mb-4 text-center">Inicio de sesión</h1>
        <div class="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input
            type="email"
            class="form-control form-control-sm"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Contraseña</label>
          <input
            type="password"
            class="form-control form-control-sm"
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <button type="submit" class="btn btn-primary d-block mx-auto mt-4">
          Aceptar
        </button>
      </form>
    </div>
  )
};
