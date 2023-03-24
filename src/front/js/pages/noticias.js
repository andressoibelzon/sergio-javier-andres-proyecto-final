import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/noticias.css";

export const Noticias = () => {
  const { store, actions } = useContext(Context);

  return (
    <body className="noticias">
      <div className="w-50 mx-auto">
        <br />
        <br />
        <h1 className="d-flex justify-content-center text-light">últimas notcias</h1>
        <br />
        <br />
        <iframe
          id="iframe"
          width="670"
          height="800"
          src="https://www.inoreader.com/stream/user/1005138984/tag/all-articles/view/html?cs=m"
          frameborder="0"
          tabindex="-1"
        ></iframe>
      </div>
    </body>
  );
};
