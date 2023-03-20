import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { ContactoForm } from "../component/contacto-form.jsx";
import { Faq } from "../component/faq.jsx";
import { About } from "../component/about.jsx";

export const Contacto = () => {

  return (
    <div className="container">
      <About />
      <Faq/>
      <ContactoForm/>
    </div>
  );
};
