import React, { useEffect} from "react";
import Header from "../components/Header";
import AccountHeader from "../components/PageTitleHeader.jsx";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { toast } from "react-toastify";
import { useAuthContext } from "../context/auth.jsx";

const Login = () => {
  // yup schema validation
  const schema = yup.object().shape({
    email: yup.string().required("Please Enter Email"),
    password: yup
      .string()
      .required("Password is required")
      .min(5, "Password must be 5 characters at minimum"),
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


  const {setUserData} = useAuthContext();
  // form login data
  const onSubmit = (data) => {
    console.log(data);

    // const formateData = {
    //   email: data.email,
    //   password: data.password,
    // };
    
   const storeData = JSON.parse(localStorage.getItem("loginData"));

   const storeEmails = storeData.map((d)=> d.email)
   const storePasswords = storeData.map((d)=> d.password)
   
   const userIndex = storeEmails.indexOf(data.email);

   if(userIndex !== -1 &&  storePasswords[userIndex] === data.password){
    setUserData(storeData[userIndex]);
     navigate("/");
   }else{
    toast.error("Invalid email or password");
   }
  };

  const navigate = useNavigate();
  const hanldeRegisterUser = () => {
    navigate("/signin");
  };

  useEffect(() => {
    document.title="Login - My Ecommerece App"
   }, [])
  return (
    <>
      <Header />
      <AccountHeader />
      <div className="account-login-container">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="main-login-form-wapper">
                <div className="login-form-box">
                  <div className="login-form-title">
                    <h2>Login</h2>
                  </div>
                  <form
                    className="login-form-main"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="form-group">
                      <label
                        className="mb-1 font-weight-medium"
                        htmlFor="username"
                      >
                        Email address&nbsp;
                        <span className="required">*</span>
                      </label>
                      <input type="text" name="email" {...register("email")} />
                      <span className="form-error-style">
                        {errors?.email?.message}
                      </span>
                    </div>
                    <div className="form-group">
                      <label
                        className="mb-1 font-weight-medium"
                        htmlFor="password"
                      >
                        Password&nbsp;
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
                    <div className=" d-flex flex-row  justify-content-between align-items-center mb-4 mt-1">
                      <div className="porto-checkbox my-2 my-sm-0">
                        <input
                          type="checkbox"
                          name="rememberme"
                          id="rememberme"
                          className="porto-control-input"
                          required=""
                        />
                        <label
                          className="porto-control-label no-radius"
                          htmlFor="rememberme"
                        >
                          Remember me
                        </label>
                      </div>
                      <div>
                      <Link to="#" className="text-v-dark">
                        Forgot Password?
                      </Link>
                      </div>
                    
                    </div>
                    <div className="login-btn-w">
                      <button type="submit">Login</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="main-register-account-wrapper">
                <div className="register-form-title">
                  <h2>New Customer</h2>
                </div>
                <div className="register-form-content">
                  <p>Registration is free and easy.</p>
                  <ul>
                    <li>Faster checkout</li>
                    <li>Save multiple shipping addresses</li>
                    <li>View and track orders and more</li>
                  </ul>
                </div>
                <div className="register-form-btn">
                  <button type="button" onClick={hanldeRegisterUser}>
                    Create an Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
