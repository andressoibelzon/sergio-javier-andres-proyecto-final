import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../../styles/login.css";

export const RegisterCode = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      user_name: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      user_name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      first_name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      last_name: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .max(20, "Must be 20 characters or less")
        .min(8, "Minimum 8 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      let isLogged = actions.register(
        values.user_name,
        values.first_name,
        values.last_name,
        values.email,
        values.password
      );
      if (isLogged) {
        //true
        navigate("/login");
      }
    },
  });
  return (
    <div className="container py-5">

              <h3 className="mb-4">Register</h3>
           
            <form className="needs-validation" onSubmit={formik.handleSubmit}>

            <div className="mb-3">
                <div>
                  <label className="form-outline mb-1" htmlFor="user_name">
                    Username
                  </label>
                  <div>
                    <input
                      style={{ width: "80%" }}
                      className="form-control mb-3"
                      id="user_name"
                      name="user_name"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.user_name}
                    />
                    {formik.touched.user_name && formik.errors.user_name ? (
                      <div>{formik.errors.user_name}</div>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label className="form-outline  mb-1" htmlFor="first_name">
                    First Name
                  </label>
                  <div>
                    <input
                      style={{ width: "80%" }}
                      className="form-control mb-3"
                      id="first_name"
                      name="first_name"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.first_name}
                    />
                    {formik.touched.first_name && formik.errors.first_name ? (
                      <div>{formik.errors.first_name}</div>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label className="form-outline  mb-1" htmlFor="last_name">
                    Last Name
                  </label>
                  <div>
                    <input
                      style={{ width: "80%" }}
                      className="form-control mb-3"
                      id="last_name"
                      name="last_name"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.last_name}
                    />
                    {formik.touched.last_name && formik.errors.last_name ? (
                      <div>{formik.errors.last_name}</div>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label className="form-outline mb-1" htmlFor="email">
                    Email
                  </label>
                  <div>
                    <input
                      style={{ width: "80%" }}
                      className="form-control mb-3"
                      id="email"
                      name="email"
                      type="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div>{formik.errors.email}</div>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label className="form-outline mb-1" htmlFor="password">
                    Password
                  </label>
                  <div>
                    <input
                      style={{ width: "80%" }}
                      className="form-control mb-3"
                      id="password"
                      name="password"
                      type="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <div>{formik.errors.password}</div>
                    ) : null}
                  </div>
                </div>

                <div>
                  <button
                    className="btn btn-primary rounded"
                    type="submit"
                  >
                    Register
                  </button>
                </div>
            </div>

            <div className="d-flex flex-row ">
              <Link to="/forgot-password">
                <div className="text-muted">Forgot password?</div>
              </Link>
              <Link to="/register">
                <div className="text-muted px-3">Log in</div>
              </Link>
            </div>
            </form>

          </div>


  );
};
