import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/contacto.css";

export const ContactoForm = () => {
  const [email, setEmail] = useState("");
  const [comentario, setComentario] = useState("");
  const { actions } = useContext(Context);
  // realizar en flux una funcion que acepte onSubmit

  function onSubmitContact(e) {
    e.preventDefault();
    actions.onSubmitContact(email, comentario);
    console.log(email, comentario)
    setEmail("");
    setComentario("");
  }

  return (
    <div className="py-5">
      <form onSubmit={onSubmitContact} className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control mb-3"
          id="exampleFormControlInput1"
          placeholder="nombre@ejemplo.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />

        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Comentario
          </label>
          <textarea
            className="form-control "
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={(e) => setComentario(e.target.value)}
            value={comentario}
            required
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>

      <Link to="/login" className="link float-end">
        Ir a inicio de sesion
      </Link>
    </div>
  );
};
