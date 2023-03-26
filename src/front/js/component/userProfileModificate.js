import React, { useEffect, useRef, useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getToken, saveToken } from "../tokenUtilities";
import { Context } from "../store/appContext";

const UserProfileModificate = () => {
  const { store, actions } = useContext(Context);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const [showError, setShowError] = useState(false);

  async function onFormSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    actions.actualizaUsusarioModificado(email, password, firstName, lastName);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    navigate("/");
    // e.target.classList.add("was-validated");
    // if (!e.target.checkValidity()) {
    //   return;
    // }
    // fetch(process.env.BACKEND_URL + "/api/profile", {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: "Bearer " + getToken(),
    //   },
    //   body: JSON.stringify({
    //     firstName,
    //     lastName,
    //     email,
    //     password,
    //   }),
    // })
    //   .then((response) => {
    //     if (response.status !== 200) {
    //       throw new Error();
    //     }
    //     actions.getDataProfile(); // Obtiene los datos del usuario en cuestion

    //     return response.json();
    //   })
    //   .then((data) => {
    //     navigate("/profile");
    //   })
    //   .catch(() => setShowError(true));
  }

  return (
    <div className="container-fluid justify">
      <div className="row justify-content-center">
        <div className="col-md-4 mt-5">
          <form
            className="form"
            action="##"
            method="post"
            id="registrationForm"
            onSubmit={onFormSubmit}
          >
            {/* {showError && (
              <div className="alert alert-danger" role="alert">
                No se ha podido actualizar los datos de usuario
              </div>
            )} */}

            <div className="form-group d-flex justify-content-center">
              <div className="col-md-6">
                <input
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  className="form-control input-profileUser mb-2"
                  name="firstName"
                  placeholder="Nombre"
                />
              </div>
            </div>
            <div className="form-group d-flex justify-content-center">
              <div className="col-md-6">
                <input
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  className="form-control input-profileUser mb-2"
                  name="firstName"
                  placeholder="Apellido"
                />
              </div>
            </div>

            <div className="form-group d-flex justify-content-center">
              <div className="col-md-6">
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="form-control input-profileUser mb-2"
                  name="email"
                  placeholder="email"
                />
              </div>
            </div>

            <div className="form-group d-flex justify-content-center">
              <div className="col-md-6">
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="form-control mb-3 input-profileUser mb-2"
                  name="password"
                  placeholder="Contraseña"
                />
              </div>
            </div>

            <div className="form-group ">
              <div className=" d-flex justify-content-evenly mb-3">
                <button className="btn btn-primary" type="submit">
                  {" "}
                  Guardar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default UserProfileModificate;
