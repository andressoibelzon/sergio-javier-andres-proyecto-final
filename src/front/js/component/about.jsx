import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/contacto.css";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { FaCalendar } from 'react-icons/fa'



export const About = () => {

	return (
  <div className="py-5">
    <div className="container px-4 py-5" id="featured-3">
    <h2 className="pb-2 border-bottom">Sobre SignalMood  </h2>
    <h3>{ FaBeer }</h3>
    <p>SignalMood es un proveedor líder de información y análisis del mercado de valores. Nuestra plataforma ofrece a los usuarios los últimos datos y conocimientos sobre acciones y tendencias de trading, presentados en gráficos fáciles de entender.

Nuestra plataforma está diseñada para ser flexible y adaptable, con gráficos personalizables y actualizaciones en tiempo real que permiten a los usuarios mantenerse al tanto de sus inversiones. Ya sea que esté buscando hacer seguimiento de una sola acción o construir una cartera diversificada, SignalMood tiene las herramientas que necesita para tener éxito.

Únase a los miles de inversores que confían para proporcionarles la información que necesitan para tener éxito en el mercado de valores. ¡Regístrese hoy y comience a explorar nuestra plataforma!</p>
<Link to="/register" className="icon-link d-inline-flex align-items-center">
          Ir a registrarse
          {/* <svg className="bi" width="1em" height="1em"><use xlink:href="#chevron-right"></use></svg> */}
        </Link>    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
        
          {/* <svg className="bi" width="1em" height="1em"><use xlink:href="#collection"></use></svg> */}
        </div>
        <h3 className="fs-2">Indices</h3>
        <p>Nuestra plataforma proporciona la información y conocimientos más recientes sobre las acciones y tendencias de trading, presentados en gráficos fáciles de entender. Los usuarios pueden hacer seguimiento de los índices del mercado de valores, incluyendo el S&P 500, NASDAQ y el Dow Jones Industrial Average, y mantenerse al día con los últimos movimientos en el mercado.</p>
        <Link to="/" className="icon-link d-inline-flex align-items-center">
          Ir a indices
          {/* <svg className="bi" width="1em" height="1em"><use xlink:href="#chevron-right"></use></svg> */}
        </Link>
      </div>
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          {/* <svg className="bi" width="1em" height="1em"><use xlink:href="#people-circle"></use></svg> */}
        </div>
        <h3 className="fs-2">Graficos</h3>
        <p>Descubra diferentes tipos de patrones de gráficos utilizados por comerciantes profesionales. Navegación intuitiva y gráficos personalizables que permiten a los usuarios hacer seguimiento de sus acciones favoritas y comparar el rendimiento con el tiempo. Ya sea que sea un operador experimentado o recién iniciado.</p>
        <Link to="/" className="icon-link d-inline-flex align-items-center">
          Ir a graficos
          {/* <svg className="bi" width="1em" height="1em"><use xlink:href="#chevron-right"></use></svg> */}
        </Link>
      </div>
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          {/* <svg className="bi" width="1em" height="1em"><use xlink:href="#toggles2"></use></svg> */}
        </div>
        <h3 className="fs-2">Noticias</h3>
        <p>Mantente informado con todas las noticias actualizadas del momento que puedan incidir directamente sobre los mercados. Proporcionamos a nuestros usuarios la información más actualizada y precisa disponible. Garantizamos que nuestros usuarios tengan acceso a los últimos datos del mercado, noticias e información.</p>
        <Link to="/" className="icon-link d-inline-flex align-items-center">
          Ir a noticias
          {/* <svg className="bi" width="1em" height="1em"><use xlink:href="#chevron-right"></use></svg> */}
        </Link>
      </div>
    </div>
  </div>

  </div>
)}
