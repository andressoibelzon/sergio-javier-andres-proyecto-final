import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Context } from "../store/appContext";
import "../../styles/login.css";

export const RegisterCode = () => {
  const { actions } = useContext(Context);

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
      // console.log(values)
      actions.login(values.email, values.password);
      // alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <section className="h-100" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 h-100">
        <div className="d-flex flex-column justify-content-center align-items-center h-100">
          <div className="col-xl-10 card rounded-3 text-black col-lg-6 d-flex justify-content-center align-items-center">

              <div>
                <h4 className="mt-1 pb-1">Register</h4>
                </div>

            <div className="card-body px-md-5 mx-md-4 mx-5 ">
              

              <form className="needs-validation" onSubmit={formik.handleSubmit}>

              <div>
              <label htmlFor="user_name">First Name</label>
                <input
                  id="user_name"
                  name="user_name"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.user_name}
                />
                {formik.touched.first_name && formik.errors.user_name ? (
                  <div>{formik.errors.user_name}</div>
                ) : null}
</div>

<div>
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.first_name}
                />
                {formik.touched.first_name && formik.errors.first_name ? (
                  <div>{formik.errors.first_name}</div>
                ) : null}
</div>

<div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.last_name}
                />
                {formik.touched.last_name && formik.errors.last_name ? (
                  <div>{formik.errors.last_name}</div>
                ) : null}
                </div>
                <div>
                <label className="form-outline mb-4" htmlFor="email">
                  Email
                </label>
                <input
                  className="mx-3"
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

<div>
                <label className="form-outline mb-4" htmlFor="password">
                  Password
                </label>
                <input
                  className="mx-3"
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

<div>
                <button className="btn btn-primary rounded" type="submit">
                  Log in
                </button>
                </div>
              </form>
              </div>

              <div className="d-flex align-items-center pb-4">
                {/* <Link to="/forgot-password">
                  <div className="text-muted">
                    Forgot password?
                  </div>
                   </Link> */}
                <Link to="/login">
                  <div className="text-muted px-3">Create an account</div>
                </Link>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};
