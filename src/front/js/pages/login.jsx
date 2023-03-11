import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [values, setValues] = useState({ showPassword: false });
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const { actions } = useContext(Context);

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleResetForm = () => {
    setEmail(""), setPassword("");
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.add("was-validated");
    if (!e.target.checkValidity()) {
      return;
    }
    fetch(process.env.BACKEND_URL + "/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error();
        }
        return response.json();
      })
      .then((data) => {
        saveToken(data.access_token);
        actions.login();
        navigate("/");
      })
      .catch(() => setShowError(true));
  };

  return (
    <section
      className="h-100 gradient-form"
      style={{ backgroundColor: "#eee" }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black ">
              <div className="row g-0 justify-content-around">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-left">
                      <h4 className="mt-1 mb-5 pb-1">Log in</h4>
                    </div>

                    <form
                      className="needs-validation"
                      noValidate
                      onSubmit={onFormSubmit}
                    >
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form-email">
                          Email
                        </label>
                        <input
                          type="email"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          id="form-email"
                          className="form-control"
                          placeholder="Insert an email address"
                        />
                      </div>
                      <label className="form-label" htmlFor="form-password">
                        Password
                      </label>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form-password"
                          className="form-control"
                          placeholder="••••••"
                        />
                      </div>

                      <div className="text-left pt-1 mb-5 pb-1">
                        <button
                          className="btn btn-primary rounded px-3 "
                          type="button"
                        >
                          Register / Log in
                        </button>
                        {/* <a className="text-muted" href="#!">
                          Forgot password?
                        </a> */}
                      </div>

                      <div className="d-flex align-items-center pb-4">
                        <button
                          type="button"
                          className="btn btn-link"
                        >
                          Forgot password?
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
