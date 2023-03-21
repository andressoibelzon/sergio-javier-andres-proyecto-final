//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";

//render your react application
// import { Context } from "../store/appContext";

// async function conditionLoggedin(e) {
//     e.preventDefault()
//     let isLogged = await actions.login(email,password);
//     if(isLogged){//true
//       setEmail("")
//       setPassword("")
//       navigate("/demo")
//     }
//   }

ReactDOM.render(<Layout />, document.querySelector("#app"));
