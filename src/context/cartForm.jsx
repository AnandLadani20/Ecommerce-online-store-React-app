import React, { createContext, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "./cart";

const FormContext = createContext();

export const FormWrapper = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [schema, setSchema] = useState(
    yup.object().shape({
      // Empty Schema beacuse not required first
    })
  );

  const fullSchema = yup.object().shape({
    fname: yup.string().required("First name is required"),
    lname: yup.string().required("Last name is required"),
    country: yup.string().required("Country name is required"),
    streetAdress: yup.string().required("Street Adress is required"),
    cityName: yup.string().required("City name is required"),
    state: yup.string().required("State name is required"),
    pinCode: yup.number().required("Pin code is required"),
    phoneNumber: yup.number().required("Phone number is required"),
    emailAdress: yup
      .string()
      .email("Invalid email address format")
      .required("Email is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const { emptyCart } = useCartContext();
  const onSubmitFormData = async (data, nav) => {
    console.log(data);
    setFormData(data);

    if (nav === "checkOut") {
      navigate("/check-out");
      setSchema(fullSchema);
    }

    if (nav === "orderComplete") {
      navigate("/order-complete");
      emptyCart()

    }
  };
  return (
    <FormContext.Provider
      value={{ register, handleSubmit, errors, onSubmitFormData, formData }}
    >
      {children}
    </FormContext.Provider>
  );
};
export const useCartFormContext = () => {
  return useContext(FormContext);
};
