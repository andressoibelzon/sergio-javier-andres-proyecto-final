import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/nav.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate()

  function handleLogout() {
    actions.logout()
    navigate("/")
  }


  return (
    // <nav classNameName="navbar navbar-light bg-light">
    // 	<div classNameName="container">
    // 		<Link to="/home">
    // 			<span classNameName="navbar-brand mb-0 h1">Nombre</span>
    // 		</Link>
    // 		<Link to="/indices">
    // 			<button classNameName="btn ml-auto">Indices</button>
    // 		</Link>
    // 		<Link to="/noticias">
    // 			<button classNameName="btn ml-auto">Noticias</button>
    // 		</Link>
    // 		<Link to="/graficos">
    // 			<button classNameName="btn ml-auto">Graficos</button>
    // 		</Link>
    // 		<div classNameName="ml-auto">
    // 			<Link to="/login">
    // 				<button classNameName="btn btn-primary">login</button>
    // 			</Link>
    // 			<Link to="/register">
    // 				<button classNameName="btn btn-primary">registro</button>
    // 			</Link>
    // 		</div>
    // 	</div>
    // </nav>
    <nav className="styleNav p-3 text-bg-black">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="/" className="nav-link px-2 text-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="/exchange" className="nav-link px-2 text-white">
                Exchange
              </a>
            </li>
            <li>
              <a href="/noticias" className="nav-link px-2 text-white">
                Noticias
              </a>
            </li>
            <li>
              <a href="/graficos" className="nav-link px-2 text-white">
                Graficos
              </a>
            </li>
            <li>
              <a href="/contacto" className="nav-link px-2 text-white">
                Contacto
              </a>
            </li>
          </ul>

          {/* <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
						<input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
					</form> */}

          {/* si store.auth esta logueado mostrar log out, sino alreves */}
          <div className="text-end">
            {store.auth === true ? (
              <Link to="/">
                <button type="button" onClick={handleLogout} className="btn btn-outline-light me-2">
                  Log out
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button type="button" className="btn btn-outline-light me-2">
                  Log in
                </button>
              </Link>
            )}

            <Link to="/register">
              <button type="button" className="btn btn-warning">
                Sign-up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
