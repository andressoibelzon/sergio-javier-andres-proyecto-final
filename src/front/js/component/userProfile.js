import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import ModalDeleteUser from "./modalDeleteUser.js";
import { getToken, deleteToken } from "../tokenUtilities";
// import { Link } from "react-router-dom";

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
      <div className="container mt-4">

        <div className="mx-3">
          <h4 className="user">
            {store.user.email}
          </h4>
        </div>
        <ul className="list-group list-group-flush list-body-main my-4">
          <li className="list-group-item text-capitalize list-body">
            <strong> Usuario </strong>: {store.user.user_name}
          </li>
          <li className="list-group-item text-capitalize list-body">
            <strong> Nombre </strong>: {store.user.first_name}
          </li>
          {/* <li className="list-group-item text-capitalize list-body">
            <strong> Segundo apellido </strong>: {store.user.last_name}
          </li> */}
          <li className="list-group-item list-body">
            <strong> Apellido </strong>: {store.user.last_name}
          </li>
        </ul>
        <div className="d-flex my-3 ">
        <div className="btn btn-danger w-50 mx-auto justify-content-center align-items-center">
          <button
            className="btn btn-md btn button-dlt"
            type="delete"
            onClick={onDeleteButtonClick}
          >
            Eliminar cuenta
          </button>
          </div>
          {/* <Link to="/profile/modificate">
                                                <button
                                                  className="btn btn-md btn btn-profile bg-gradient  ms-4"
                                                  type="button"
                                                >
                                                  Modificar datos de usuario
                                                </button>
                                              </Link> */}
        </div>
      </div>
      {showModal && <ModalDeleteUser />}
    </>
  );
};

export default userProfile;
