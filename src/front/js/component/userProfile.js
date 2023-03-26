import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import ModalDeleteUser from "./modalDeleteUser.js";
import { getToken, deleteToken } from "../tokenUtilities";
import { Link } from "react-router-dom";
import "../../styles/profile.css";

const userProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getDataProfile(); // Obtiene los datos del usuario en cuestion
  }, []);

  const onDeleteButtonClick = () => {
    fetch(process.env.BACKEND_URL + "/api/profile", {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error();
        }
        return response.json();
      })

      .then((data) => {
        deleteToken();
        actions.logout(false);
        setShowModal(true);
      })
      .catch(() => {
        setShowModal(false);
      });
  };

  return (
    <>
      <div id="card-profile" className="card profile-date mt-4 border-0">
        {" "}
        {/* <img
                                                          src={store.user.image}
                                                          className="avatar rounded-circle img-thumbnail img-profile-date img-fluid mt-2 mb-3"
                                                          alt="..."
                                                        /> */}{" "}
        <div className="card-body-h5 mb-0">
          <h5 className="card-title fs-1 ms-3 mb-0 text-capitalize user">
            {" "}
            {store.user.user_name}{" "}
          </h5>{" "}
        </div>{" "}
        <ul className="list-group list-group-flush list-body-main mt-4 ">
          <li className="list-group-item text-capitalize list-body border-0">
            <strong> Nombre </strong>: {store.user.first_name}{" "}
          </li>{" "}
          <li className="list-group-item text-capitalize list-body border-0">
            <strong> Primer apellido </strong>: {store.user.last_name}{" "}
          </li>{" "}
          {/* <li className="list-group-item text-capitalize list-body">
                        <strong> Segundo apellido </strong>: {store.user.last_name}{" "}
                      </li>{" "} */}{" "}
          <li className="list-group-item list-body">
            <strong> Correo electrónico </strong>: {store.user.email}{" "}
          </li>{" "}
        </ul>{" "}
        <div id="container-buttons-profile" className="container">
          <Link to="/profile/modificate">
            <button className="btn-primary btn  border shadow" type="button">
              Modificar datos{" "}
            </button>{" "}
          </Link>{" "}
          <button
            className="btn btn-outline-danger shadow float-end"
            type="delete"
            onClick={onDeleteButtonClick}
          >
            Eliminar cuenta{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
      {showModal && <ModalDeleteUser />}{" "}
    </>
  );
};

export default userProfile;
