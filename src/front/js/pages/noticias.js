import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/noticias.css";

export const Noticias = () => {
  const { store, actions } = useContext(Context);

  return <div className="container"></div>;
};
