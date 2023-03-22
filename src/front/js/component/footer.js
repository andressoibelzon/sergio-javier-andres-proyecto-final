import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/footer.css";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const { actions } = useContext(Context);

  function onSubmitSusc(e) {
    e.preventDefault();
    actions.onSubmitSusc(email);
    setEmail("");
  }

  return (
    <footer className="stylefooter py-5">
      <div className="row">
        <div className="col-6 col-md-2 mb-3">
          <h5>Principales</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-muted">
                Home
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/indices" className="nav-link p-0 text-muted">
                Indices
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/graficos" className="nav-link p-0 text-muted">
                Graficos
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/contacto" className="nav-link p-0 text-muted">
                Politica de privacidad
              </Link>
            </li>
            {/* <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li> */}
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5>Secciones</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="/noticias" className="nav-link p-0 text-muted">
                Noticias
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/contacto" className="nav-link p-0 text-muted">
                Contacto
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/contacto" className="nav-link p-0 text-muted">
                Preguntas frecuentes
              </Link>
            </li>
            {/* <li className="nav-item mb-2"><a href="/contacto" className="nav-link p-0 text-muted">FAQs</a></li>
					<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li> */}
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5>Webs de inversión</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a
                href="https://bolsazone.com/"
                className="nav-link p-0 text-muted"
              >
                BolsaZone
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="https://www.clicktrade.es/"
                className="nav-link p-0 text-muted"
              >
                Clicktrade
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="https://www.earningswhispers.com/"
                className="nav-link p-0 text-muted"
              >
                Earning Whispers
              </a>
            </li>
            {/* <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
					<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li> */}
          </ul>
        </div>

        <div className="col-md-5 offset-md-1 mb-3">
          <form onSubmit={onSubmitSusc}>
            <h5>Suscripción</h5>
            <p>La mejor información de mercados finacieros.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">
                Email
              </label>
              <input
                id="newsletter1"
                type="text"
                className="form-control"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
              <button className="btn btn-primary" type="submit">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>© 2023 SignalMood. Todos los derechos reservados.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3">
            <a className="link-dark" href="#">
              <svg className="bi" width="24" height="24">
                <use xlinkHref="#twitter"></use>
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="link-dark" href="#">
              <svg className="bi" width="24" height="24">
                <use xlinkHref="#instagram"></use>
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="link-dark" href="#">
              <svg className="bi" width="24" height="24">
                <use xlinkHref="#facebook"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
