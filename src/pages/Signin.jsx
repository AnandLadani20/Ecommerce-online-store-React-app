import React, { useEffect } from "react";
import Header from "../components/Header";
import AccountHeader from "../components/PageTitleHeader.jsx";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Signin = () => {
  const schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    userRoles: yup.string().required("Role is required"),
    emailAdress: yup
      .string()
      .email("Invalid email address format")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(5, "Password must be 5 characters at minimum")
      .matches(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
        "Your password must contain Uppercase,Digit & Special Characters."
      ),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("password"), null],
        "Password and Confirm Password must be match."
      )
      .required("Confirm Password is required."),
  });

  // useForm distructuring
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  // form login data
  const onSubmit = async (data) => {
    console.log(data);
    delete data.confirmPassword;
    // username

    let storeData = JSON.parse(localStorage.getItem("loginData")) || [];
    const formattedData = {
      id: storeData.length + 1,
      email: data.emailAdress,
      password: data.password,
      fname: data.firstName,
      lname: data.lastName,
      role: data.userRoles,
    };
    storeData.push(formattedData);
    localStorage.setItem("loginData", JSON.stringify(storeData));
    navigate("/login");
  };

  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Signin - My Ecommerece App";
  }, []);
  return (
    <>
      <Header />
      <AccountHeader />
      <div className="account-signin-container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form
                className="signin-form-main"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="personal-info-acc-sign">
                  <div className="personal-info-title">
                    <h4>Personal Information</h4>
                    <div className="title-bottom-border"></div>
                    <p>
                      Please enter the following information to create your
                      account.
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label
                        className="mb-1 font-weight-medium"
                        htmlFor="firstName"
                      >
                        First Name
                        <span className="required">*</span>
                      </label>

                      <input
                        type="text"
                        name="firstName"
                        {...register("firstName")}
                      />
                      <span className="form-error-style">
                        {errors?.firstName?.message}
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label
                        className="mb-1 font-weight-medium"
                        htmlFor="username"
                      >
                        Last Name
                        <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        {...register("lastName")}
                      />
                      <span className="form-error-style">
                        {errors?.lastName?.message}
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label
                        className="mb-1 font-weight-medium"
                        htmlFor="username"
                      >
                        Email Address
                        <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="emailAdress"
                        {...register("emailAdress")}
                      />
                      <span className="form-error-style">
                        {errors?.emailAdress?.message}
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label
                        className="mb-1 font-weight-medium"
                        htmlFor="userRoll"
                      >
                        Roles
                        <span className="required">*</span>
                      </label>
                      <select
                        className="form-control"
                        id="userRoll"
                        name="userRoles"
                        {...register("userRoles")}
                      >
                        <option value="buyer">buyer</option>
                        <option value="seller">seller</option>
                      </select>
                      <span className="form-error-style">
                        {errors?.userRoles?.message}
                      </span>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="login-info-acc-sign mb-3">
                      <div className="login-info-title">
                        <h4>Login Information</h4>
                        <div className="title-bottom-border"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label
                        className="mb-1 font-weight-medium"
                        htmlFor="username"
                      >
                        Password
                        <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="password"
                        {...register("password")}
                      />
                      <span className="form-error-style">
                        {errors?.password?.message}
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label
                        className="mb-1 font-weight-medium"
                        htmlFor="username"
                      >
                        Confirm Password
                        <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="confirmPassword"
                        {...register("confirmPassword")}
                      />
                      <span className="form-error-style">
                        {errors?.confirmPassword?.message}
                      </span>
                    </div>
                  </div>
                  <div className="col-12 mt-2">
                    <div className="main-signin-form-btn">
                      <button type="submit">Register</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signin;
