import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Noticias } from "./pages/noticias";
import { Graficos } from "./pages/graficos";
import { Exchange } from "./pages/exchange";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Login } from "./pages/login.jsx";
import { Register } from "./pages/register.jsx";
import { Contacto } from "./pages/contacto.jsx";

import Profile from "./pages/profile";
import UseDataModificate from "./pages/profileModificate";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Noticias />} path="/noticias" />
            <Route element={<Graficos />} path="/graficos" />
            <Route element={<Exchange />} path="/exchange" />
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
            <Route element={<Profile />} path="/profile" />
            <Route element={<UseDataModificate />} path="/profile/modificate" />
            <Route element={<Contacto />} path="/contacto" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1> Not found! </h1>} />
          </Routes>{" "}
          <Footer />
        </ScrollToTop>{" "}
      </BrowserRouter>{" "}
    </div>
  );
};

export default injectContext(Layout);
