import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/nav.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  function handleLogout() {
    actions.logout();
    navigate("/");
  }

  return (
    <nav className="styleNav p-3 text-bg-black">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            to="/"
          >
            <h3 className="mx-5">MarketMood</h3>
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 text-secondary">
                Home
              </Link>
            </li>

            <li>
              {store.auth === true ? (
                <Link to="/graficos" className="nav-link px-2 text-white">
                  Graficos
                </Link>
              ) : null}
            </li>

            <li>
              {store.auth === true ? (
                <Link to="/exchange" className="nav-link px-2 text-white">
                  Exchange
                </Link>
              ) : null}
            </li>

            <li>
              {store.auth === true ? (
                <Link to="/noticias" className="nav-link px-2 text-white">
                  Noticias
                </Link>
              ) : null}
            </li>

            <li>
              <Link to="/contacto" className="nav-link px-2 text-white">
                Contacto
              </Link>
            </li>
          </ul>

          {/* login registro */}
          <div className="text-end">
            {/* si store.auth esta logueado mostrar log out, sino alreves */}
            {store.auth === true ? (
              <Link to="/">
                <button
                  type="button"
                  onClick={handleLogout}
                  className="btn btn-outline-light me-2"
                >
                  Salir
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button type="button" className="btn btn-outline-light me-2">
                  Inicio
                </button>
              </Link>
            )}

            {/* si store.auth esta logueado mostrar Perfil sino registrarse */}
            {store.auth === true ? (
              <Link to="/profile">
                <button
                  type="button"
                  onClick={handleLogout}
                  className="btn btn-outline-light me-2"
                >
                  Perfil
                </button>
              </Link>
            ) : (
              <Link to="/register">
                <button type="button" className="btn btn-outline-light me-2">
                  Registro
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
