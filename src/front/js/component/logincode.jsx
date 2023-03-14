import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../../styles/login.css";

export const LoginCode = () => {
  const { actions } = useContext(Context);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      // firstName: Yup.string()
      //   .max(15, "Must be 15 characters or less")
      //   .required("Required"),
      // lastName: Yup.string()
      //   .max(20, "Must be 20 characters or less")
      //   .required("Required"),
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
          <div className="col-xl-10 card rounded-3 text-black col-lg-6">
            <div className="card-body p-md-5 mx-md-4">
              <div className="">
                <h4 className="mt-1 mb-5 pb-1">Log in</h4>
              </div>

              <form className="needs-validation" onSubmit={formik.handleSubmit}>
                {/* <label htmlFor="firstName">First Name</label>
      <input              
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null} */}

                {/* <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null} */}

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

                <button className="btn btn-primary rounded" type="submit">
                  Log in
                </button>
              </form>

              <div className="d-flex align-items-center pb-4">
                {/* <Link to="/forgot-password">
                  <div className="text-muted">
                    Forgot password?
                  </div>
                   </Link> */}
                <Link to="/register">
                  <div className="text-muted px-3">Create an account</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
