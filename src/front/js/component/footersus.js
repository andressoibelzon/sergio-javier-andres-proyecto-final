import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/footer.css";

export const Suscripcion = () => {
    const [email, setEmail] = useState("");
    const { actions } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        actions.suscripcion(email);

        setEmail("");

    }

    return (
        <div className="col-md-5 offset-md-1 mb-3">
            <form onSubmit={handleSubmit}>
                <h5>Suscripción</h5>
                <p>La mejor información de mercados financieros.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">
                        Email
                    </label>
                    <input
                        id="newsletter1"
                        type="email"
                        className="form-control"
                        placeholder="Ingresa tu correo electrónico"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        aria-describedby="emailHelp"
                        required
                    />
                    <button className="btn btn-primary" type="submit">
                        Enviar
                    </button>
                </div>
                <small id="emailHelp" className="form-text text-muted">
                    Nunca compartiremos tu correo electrónico con terceros.
                </small>
            </form>
        </div>
    )
}
