import React, { Component } from "react";
import "../../styles/footer.css"

export const Footer = () => (
	<footer className="stylefooter py-5">
		<div className="row">
			<div className="col-6 col-md-2 mb-3">
				<h5>Principales</h5>
				<ul className="nav flex-column">
					<li className="nav-item mb-2"><a href="/home" className="nav-link p-0 text-muted">Home</a></li>
					<li className="nav-item mb-2"><a href="/exchange" className="nav-link p-0 text-muted">Exchange</a></li>
					<li className="nav-item mb-2"><a href="/graficos" className="nav-link p-0 text-muted">Graficos</a></li>
					<li className="nav-item mb-2"><a href="/contacto" className="nav-link p-0 text-muted">Politica de privacidad</a></li>
					{/* <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li> */}
				</ul>
			</div>

			<div className="col-6 col-md-2 mb-3">
				<h5>Secciones</h5>
				<ul className="nav flex-column">
					<li className="nav-item mb-2"><a href="/noticias" className="nav-link p-0 text-muted">Noticias</a></li>
					<li className="nav-item mb-2"><a href="/contacto" className="nav-link p-0 text-muted">Contacto</a></li>
					<li className="nav-item mb-2"><a href="/contacto" className="nav-link p-0 text-muted">Preguntas frecuentes</a></li>
					{/* <li className="nav-item mb-2"><a href="/contacto" className="nav-link p-0 text-muted">FAQs</a></li>
					<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li> */}
				</ul>
			</div>

			<div className="col-6 col-md-2 mb-3">
				<h5>Webs de inversión</h5>
				<ul className="nav flex-column">
					<li className="nav-item mb-2"><a href="https://bolsazone.com/" className="nav-link p-0 text-muted">BolsaZone</a></li>
					<li className="nav-item mb-2"><a href="https://www.clicktrade.es/" className="nav-link p-0 text-muted">Clicktrade</a></li>
					<li className="nav-item mb-2"><a href="https://www.earningswhispers.com/" className="nav-link p-0 text-muted">Earning Whispers</a></li>
					{/* <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
					<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li> */}
				</ul>
			</div>

			<div className="col-md-5 offset-md-1 mb-3">
				<form>
					<h5>Suscrición</h5>
					<p>La mejor información de mercados finacieros.</p>
					<div className="d-flex flex-column flex-sm-row w-100 gap-2">
						<label for="newsletter1" className="visually-hidden">Email</label>
						<input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
						<button className="btn btn-primary" type="button">Suscribete</button>
					</div>
				</form>
			</div>
		</div>

		<div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
			<p>© 2023 Company, Inc. All rights reserved.</p>
			<ul className="list-unstyled d-flex">
				<li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"></use></svg></a></li>
				<li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg></a></li>
				<li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg></a></li>
			</ul>
		</div>
	</footer>
)