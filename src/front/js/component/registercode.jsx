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
    <div className="container">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="col-xl-6 rounded-3 text-black col-sm-10">
          <div className=" p-md-5 mx-md-5 d-flex flex-column">
            <div>
              <h4 className="mt-1 mb-5 pb-1">Register</h4>
            </div>

            <div className="">
              <form className="needs-validation" onSubmit={formik.handleSubmit}>
                <div>
                  <label className="form-outline" htmlFor="user_name">
                    Username
                  </label>
                  <div>
                    <input
                      style={{ width: "80%" }}
                      className=""
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
                  <label className="form-outline mt-4" htmlFor="first_name">
                    First Name
                  </label>
                  <div>
                    <input
                      style={{ width: "80%" }}
                      className=""
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
                  <label className="form-outline mt-4" htmlFor="last_name">
                    Last Name
                  </label>
                  <div>
                    <input
                      style={{ width: "80%" }}
                      className=""
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
                  <label className="form-outline mt-4" htmlFor="email">
                    Email
                  </label>
                  <div>
                    <input
                      style={{ width: "80%" }}
                      className=""
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
                  <label className="form-outline mt-4" htmlFor="password">
                    Password
                  </label>
                  <div>
                    <input
                      style={{ width: "80%" }}
                      className=""
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
                    className="btn btn-primary rounded mt-4 mb-3"
                    type="submit"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>

            <div className="d-flex flex-row">
              <Link to="/recovery-password">
                <div className="text-muted">Forgot password?</div>
              </Link>
              <Link to="/register">
                <div className="text-muted px-3">Log in</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
