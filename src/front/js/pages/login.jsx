import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/login.css";

export const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [values, setValues] = useState({ showPassword: false });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { actions } = useContext(Context);

  // const handleClickShowPassword = () => {
  //   setValues({ ...values, showPassword: !values.showPassword });
  // };

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  const onFormSubmit = (e) => {
    console.log("entra a formsubmit");
    if (!e.target.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }

    e.preventDefault();
    const regex = "/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/";
    const regexName = "^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$";

    if (!firstName.match(regexName)) {
      setError("Wrong name");
    }
    if (!lastName.match(regexName)) {
      setError("Wrong lastname");
    }
    if (!password.match(regexName)) {
      setError("Password must be between 8-20 characteres");
      // se le agrega was-validated al className
      e.target.classList.add("was-validated");
    } else {
      console.log("mando a base de datos");
      navigate("/");
      //   const res = await fetch(process.env.BACKEND_URL + "/api/register", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify({
      //       first_name: firstName,
      //       last_name: lastName,
      //       email,
      //       password,
      //     }),
      //   });
      //   if (res.ok) {
      //     const data = await res.json();
      //     navigate("/home");
      //   } else {
      //     const error = await res.json();
      //     setError(error.msg);
      //   }
      // }
    }

    // const handleResetForm = () => {
    //   setFirstName(""), setLastName(""), setEmail(""), setPassword("");
    // }
  };

  return (
    <section className="h-100" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10 card rounded-3 text-black col-lg-6">
            <div className="card-body p-md-5 mx-md-4">
              <div className="">
                <h4 className="mt-1 mb-5 pb-1">Register</h4>
              </div>

              {/* empieza el form */}
              <form
                className="needs-validation"
                noValidate
                onSubmit={onFormSubmit}
              >
                {/* firstname */}
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form-email">
                    First name
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    required
                    id="form-firstname"
                    className="form-control"
                    placeholder="Insert your first name"
                  />
                  <div className="invalid-feedback bg-danger bg-opacity-75 border-danger rounded p-2 text-white">
                    Wrong first name
                  </div>
                </div>

                {/* lastname */}
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form-email">
                    Last name
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    required
                    id="form-lastname"
                    className="form-control"
                    placeholder="Insert your last name"
                  />
                  <div className="invalid-feedback bg-danger bg-opacity-75 border-danger rounded p-2 text-white">
                    Wrong last name
                  </div>
                </div>

                {/* email */}
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form-email">
                    Email
                  </label>
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    id="form-email"
                    className="form-control"
                    placeholder="Insert an email address"
                    // aria-describedby="emailHelp"
                  />
                  <div className="invalid-feedback bg-danger bg-opacity-75 border-danger rounded p-2 text-white">
                    Wrong email
                  </div>
                </div>

                {/* password */}
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form-password">
                    Password
                  </label>
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                    id="form-password"
                    className="form-control"
                    placeholder="Insert a password"
                  />
                  <div className="invalid-feedback bg-danger bg-opacity-75 border-danger rounded p-2 text-white">
                    Wrong password
                  </div>
                </div>



                {/* boton registro */}
                <div className="text-left pt-1 mb-5 pb-1">
                  <button
                    className="btn btn-primary rounded px-3 "
                    type="submit"
                    // onClick={handleResetForm}
                  >
                    Register
                  </button>
                </div>

                <div className="d-flex align-items-center pb-4">
                  <a className="text-muted" href="#!">
                    Forgot password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
