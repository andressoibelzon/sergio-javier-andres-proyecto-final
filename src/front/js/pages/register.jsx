import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/login.css";
import { RegisterCode } from "../component/registercode.jsx";

export const Register = () => {
  return (
    <div className="h-100" style={{ backgroundColor: "#eee" }}>
        <RegisterCode />
    </div>
  );
};
