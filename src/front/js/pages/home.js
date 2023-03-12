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
      <div class="container-fluid">
        <img src={homeChartsUrl} className="img-fluid" alt="Imagen" />
        <div class="texto-superpuesto">
          <h1>Título del texto</h1>
          <p>Texto que quieres poner sobre la imagen.</p>
        </div>
      </div>
      <div className="card-group">
        <div class="card" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title">INDICES</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              Esta seccion es la de los indices
            </h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
