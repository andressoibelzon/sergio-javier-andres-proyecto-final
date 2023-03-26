import React, { Component } from "react";
import { Link, useNavigate} from "react-router-dom";

import "../../styles/contacto.css";

export const Faq = () => (
  <div className="py-5">
   <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Introducción: ¿Qué son los gráficos e índices de mercado?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Gráficos e índices</strong> de mercado son herramientas para <strong>visualizar el rendimiento financiero de activos y mercados.</strong> Los gráficos muestran el precio de un activo a lo largo del tiempo, mientras que los índices son valores numéricos que indican el rendimiento de un conjunto de activos. Se utilizan para tomar decisiones de inversión y evaluar el desempeño de una cartera en relación con el mercado.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      ¿Cómo puedo obtener acceso a MarketMood?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Para obtener acceso a MarketMood, primero debe <strong>registrarse</strong> en su sitio web y crear una cuenta. <strong>Listo</strong>, ya puedes disfrutar de todas las herramientas de la página.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      ¿Cómo interpretar los datos usando diferentes patrones de gráficos?      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Interpretar los datos mediante <strong>patrones de gráficos</strong> implica analizar la información visualmente. Algunos patrones comunes incluyen <strong>líneas de tendencia, soportes y resistencias, y patrones de velas.</strong> La interpretación de estos patrones puede ayudar a identificar tendencias, señales de compra y venta, y niveles de precios importantes en los mercados financieros.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      ¿Qué es el análisis técnico y cómo puede ayudarme?
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headinFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      El análisis técnico utiliza <strong>patrones de precios</strong> para predecir el movimiento del mercado. Ayuda a tomar decisiones de inversión, como identificar soportes y resistencias, patrones y tendencias de precios, y cuándo comprar o vender. Debe usarse junto con otras técnicas de análisis y evaluación de riesgos.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      ¿Cuáles son algunos de los mejores recursos para aprender sobre gráficos e índices?
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Algunos de los mejores recursos para aprender sobre gráficos e índices incluyen <strong>sitios web especializados en finanzas y mercados, como MarketMood.</strong> También hay libros sobre análisis técnico y financiero, como "Technical Analysis of the Financial Markets" de John J. Murphy y "The Intelligent Investor" de Benjamin Graham. Además, hay cursos y tutoriales en línea. Se pueden encontrar muchas comunidades y foros en línea donde los inversores comparten conocimientos y estrategias.
      </div>
    </div>
  </div>
</div>
  </div>
);
