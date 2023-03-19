import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/login.css";




export const Logout = () => {
  return (
    <Link to="/">
    <div className="">
      <button type="button" className="btn btn-primary">
        Log out
      </button>
    </div>
    </Link>
  );
};
