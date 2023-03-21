import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/login.css";
import { LoginCode } from "../component/logincode.jsx";
import { Logout } from "../component/logout.jsx";

export const Login = () => {
  return (
    <div className="h-100" style={{ backgroundColor: "#eee" }}>
      <LoginCode />
    </div>
  );
};
