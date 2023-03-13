import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
  <div className="d-flex flex-column p-3 my-5">
    <div>
      <h4>SignalMood</h4>
    </div>
    <div className="d-flex flex-row justify-content-evenly align-items-center">
      <div className="">
        <div className="">
          <Link to="/">
            <div className="">Home</div>
          </Link>
          <Link to="/registre">
            <div className="">Register</div>
          </Link>
          <Link to="/login">
            <div className="">Login</div>
          </Link>
          <Link to="/charts">
            <div className="">Charts</div>
          </Link>
          <Link to="/indexes">
            <div className="">Indexes</div>
          </Link>
          <Link to="/contact">
            <div className="">Contact</div>
          </Link>
        </div>
      </div>
      <div>Image or Chart</div>
      <div className="d-flex flex-column">
        <Link to="/">
          <div>Github</div>
        </Link>
        <Link to="/">
          <div>Linkedin</div>
        </Link>
        <Link to="/">
          <div>Linkedin</div>
        </Link>
        <Link to="/">
          <div>Linkedin</div>
        </Link>
      </div>
    </div>
    <div>
      <p className="py-4 text-wrap text-start">
        Disclosure: The information provided on this website is intended for
        general informational purposes only and should not be considered as
        investment advice. Trading in financial markets involves risk, including
        the potential loss of principal, and past performance does not guarantee
        future results. The indexes and market charts presented on this website
        may be delayed and should not be used for making real-time trading
        decisions. The market data is provided by third-party sources and we do
        not guarantee its accuracy, completeness, or reliability. Trading and
        investment decisions should be based on your own research, analysis, and
        risk tolerance. Before making any investment decisions, you should
        consult with a financial advisor and consider your investment
        objectives, financial situation, and other relevant factors. We are not
        responsible for any losses or damages that may arise from the use of the
        information presented on this website. By accessing this website, you
        acknowledge and agree to these terms and conditions.
      </p>
    </div>
  </div>
);
