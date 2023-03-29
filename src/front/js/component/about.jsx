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
        <h3>{FaBeer}</h3>
        <p>MarketMood es un proveedor líder de información y análisis del mercado de valores. Nuestra plataforma ofrece a los usuarios los últimos datos y conocimientos sobre acciones y tendencias de trading, presentados en gráficos fáciles de entender.

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
            <h3 className="fs-2">Indices         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bank" viewBox="0 0 16 16">
              <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.501.501 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89L8 0ZM3.777 3h8.447L8 1 3.777 3ZM2 6v7h1V6H2Zm2 0v7h2.5V6H4Zm3.5 0v7h1V6h-1Zm2 0v7H12V6H9.5ZM13 6v7h1V6h-1Zm2-1V4H1v1h14Zm-.39 9H1.39l-.25 1h13.72l-.25-1Z" />
            </svg></h3>

            <p >Nuestra plataforma proporciona la información y conocimientos más recientes sobre las acciones y tendencias de trading, presentados en gráficos fáciles de entender. Los usuarios pueden hacer seguimiento de los índices del mercado de valores, incluyendo el S&P 500, NASDAQ y el Dow Jones Industrial Average, y mantenerse al día con los últimos movimientos en el mercado.</p>
            <Link to="/exchange" className="icon-link d-inline-flex align-items-center">
              Ir a indices <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right mx-1" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg>
            </Link>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              {/* <svg className="bi" width="1em" height="1em"><use xlink:href="#people-circle"></use></svg> */}
            </div>
            <h3 className="fs-2">Graficos <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-up" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z" />
            </svg></h3>
            <p>Descubra diferentes tipos de patrones de gráficos utilizados por comerciantes profesionales. Navegación intuitiva y gráficos personalizables que permiten a los usuarios hacer seguimiento de sus acciones favoritas y comparar el rendimiento con el tiempo. Ya sea que sea un operador experimentado o recién iniciado.</p>
            <Link to="/graficos" className="icon-link d-inline-flex align-items-center">
              Ir a graficos <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right mx-1" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg>
            </Link>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            </div>
            <h3 className="fs-2">Noticias <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-newspaper" viewBox="0 0 16 16">
              <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
              <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
            </svg></h3>
            <p>Mantente informado con todas las noticias actualizadas del momento que puedan incidir directamente sobre los mercados. Proporcionamos a nuestros usuarios la información más actualizada y precisa disponible. Garantizamos que nuestros usuarios tengan acceso a los últimos datos del mercado, noticias e información.</p>
            <Link to="/noticias" className="icon-link d-inline-flex align-items-center">
              Ir a noticias <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right mx-1" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
