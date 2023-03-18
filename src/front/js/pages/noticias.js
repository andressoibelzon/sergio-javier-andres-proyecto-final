import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/noticias.css";

export const Noticias = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <iframe
        id="iframe"
        width="670"
        height="800"
        src="https://www.inoreader.com/stream/user/1005138984/tag/all-articles/view/html?cs=m"
        frameborder="0"
        tabindex="-1"
      ></iframe>
    </div>
  );
};
