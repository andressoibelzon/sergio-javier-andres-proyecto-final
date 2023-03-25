import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/contacto.css";

export const ContactoForm = () => {
  const [email, setEmail] = useState("");
  const [comentario, setComentario] = useState("");
  const { actions } = useContext(Context);

  function onSubmit(e) {
    e.preventDefault();
    actions.contacto(email, comentario);
    setEmail("");
    setComentario("");
  }

  return (
    <div className="py-5">
      <form onSubmit={onSubmit} className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
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
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Comentario
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={(e) => setComentario(e.target.value)}
            value={comentario}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <Link to="/login" className="link float-end">
        Ir a inicio de sesion
      </Link>
    </div>
  );
};
