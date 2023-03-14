import React, { useContext } from "react";
import { Context } from "../store/appContext";
import carrousel1Url from "../../img/bull&bear.jpeg";
import homeChartsUrl from "../../img/homeCharts.jpeg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid">
      <div class="container-fluid">
        <img src={carrousel1Url} className="img-fluid" alt="Imagen" />
        <div class="texto-superpuesto1">
          <h1>Título del texto</h1>
          <p>Texto que quieres poner sobre la imagen.</p>
        </div>
      </div>
      <div className="container-fluid">
        <img src={homeChartsUrl} className="img-fluid" alt="Imagen" />
        <div class="texto-superpuesto">
          <h1>Título del texto</h1>
          <p>Texto que quieres poner sobre la imagen.</p>
        </div>
      </div>
      <div id="section3" className="d-flex row flex-nowrap overflow-auto">
        <div class="card text-bg-primary mb-3" style={{ width: "20rem" }}>
          <div class="card-body">
            <svg
              id="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
            </svg>
            <h5 class="card-title">Conocimiento actualizado</h5>
            <p class="card-text">
              Mantente al día con noticias actualizadas y análisis de expertos
              para tomar decisiones informadas.
            </p>
          </div>
        </div>
        <div class="card text-bg-primary mb-3" style={{ width: "20rem" }}>
          <div class="card-body">
            <svg
              id="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" />
            </svg>
            <h5 class="card-title">Estrategias rentables</h5>
            <p class="card-text">
              Utiliza nuestras señales de entrada para maximizar tus ganancias y
              reducir tus riesgos.
            </p>
          </div>
        </div>
        <div class="card text-bg-primary mb-3" style={{ width: "20rem" }}>
          <div class="card-body">
            <svg
              id="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
            </svg>
            <h5 class="card-title">Experiencia óptima</h5>
            <p class="card-text">
              Diseñado pensando en ti, para ofrecerte una experiencia de usuario
              intuitiva y sin interrupciones.
            </p>
          </div>
        </div>
      </div>
      <div id="circulos" className="container-fluid">
        <div class="circulo-exterior"></div>
        <div class="circulo-medio"></div>
        <div class="circulo-interior"></div>
      </div>
    </div>
  );
};
