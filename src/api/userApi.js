import axios from "axios";
import {toast} from 'react-toastify'

const baseUrl ="http://localhost:3000/api/v1/";

const userApi =  axios.create({
    baseURL:baseUrl,
    responseType:"json",
    
});

let requests = [];
let conflictRequest = "";

// Request interceptors Customize based on your need
userApi.interceptors.request.use(
 
    async (config) => {
          console.log("config",config)
      if (config.headers) {
        config.headers["Content-Type"] = "application/json";
      }
      
      if (config.headers["isDisableLoader"] !== true) {
        requests.push(config.url);
        showLoader();
      }
 
      return config;
    },
    (error) => {
      alert(error);
      Promise.reject(error);
    }
  );

// Response interceptors Customize based on your need
userApi.interceptors.response.use(
    (response) => {
      const { data } = response;
      console.log("responseeee,", response);
      removeRequest(response.config.url);
      console.log("data",data)
      if (data?.code && data?.code !== 200) {
        toast.error(
          response.data.error ?? "Somthing went wrong. Please try again!"
        );
        return Promise.reject(new Error(data?.error || "Error"));
      } else {
        return Promise.resolve(response.data.result);
      }
    },
    (error) => {
        
      removeRequest(error.config.url);
      
      toast.error(error?.response?.data?.error ?? "Somthing went wrong");
      return Promise.reject(error);
    }
  );

  function showLoader() {
    document.body.classList.add("loader-open");
  }
  
  function hideLoader() {
    document.body.classList.remove("loader-open");
  }

// remove completed request
function removeRequest(req) {
    const i = requests.indexOf(req);
    if (i >= 0) {
      requests.splice(i, 1);
    }
    if (requests.length > 0) {
      showLoader();
    } else {
      hideLoader();
    }
    if (req === conflictRequest) {
      conflictRequest = "";
      requests = requests.filter((request) => request !== req);
    }
  }

export default userApi;