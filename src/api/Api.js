import axios from "axios";
import { toast } from "react-toastify";


export const baseUrl = "https://fakestoreapi.com"; // Replace with your API base URL

const Api = axios.create({
  baseURL: baseUrl,
  responseType: "json",
});

let requests = [];
let conflictRequest = "";

// Add a request interceptor to the instance
Api.interceptors.request.use(
  function (config) {

    if (config.headers) {
      config.headers["Content-Type"] = "application/json";
    }
    if (config.headers["isDisableLoader"] !== true) {
      requests.push(config.url);
      showLoader();
    }
    // Do something before request is sent
    // console.log("config",config)
    return config;
    
  },
  function (error) {
    alert(error);
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor to the instance
Api.interceptors.response.use(
  function (response) {
    const { data,status } = response;
    removeRequest(response.config.url);
    if(data && status !== 200){
      toast.error(
        response.data.error ?? "Somthing went wrong. Please try again!"
      )
      return Promise.reject(new Error(data?.error || "Error"));
    }
    else {
      return Promise.resolve(response)
    }

  },
  function (error) {
    console.log("error",error)
    removeRequest(error.config.url);
    toast.error(error?.response?.data?.error ?? "Somthing went wrong")
    return Promise.reject(error);
  }
);

function showLoader() {
  document.body.classList.add("loader-open");
}

function hideLoader() {
  document.body.classList.remove("loader-open");
}

function removeRequest(req){
  const i = requests.indexOf(req);
  if(i >= 0){
    requests.splice(i, 1);
  }
  if(requests.length > 0){
    showLoader();
  }
  else {
    hideLoader();
  }
  if(req === conflictRequest){
    conflictRequest = '';
    requests = requests.filter((request) => request !== req)
  }
}

export default Api;
