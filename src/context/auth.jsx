import React, {useState, createContext, useContext } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const intialUserValue = {
  id: null,
  email: "",
  firstName: "",
  lastName: "",
  role: "",
  password: "",
};

const initialState = {
  setUser: () => {},
  user: intialUserValue,
  signOut: () => {},
  appInitialize: false,
};

export const AuthContext = createContext(initialState);


export const AuthWrapper = ({ children }) => {
  const [user,setUser] = useState(intialUserValue);

 const navigate = useNavigate();

  const setUserData = (data) =>{
    localStorage.setItem("user",JSON.stringify(data));
    setUser(data);
  }
 

  
  useEffect( () => {
    const itemStr = JSON.parse(localStorage.getItem("user")) || intialUserValue;
     // if the item doesn't exist, return null
    if(!itemStr.id){
      navigate("/login")
    }
    setUser(itemStr)
        // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const logOut = () => {
    setUser(intialUserValue);
    localStorage.removeItem("user")
    navigate('/login')
  }
  

  return (
    <>
      <AuthContext.Provider value={{user,setUser,setUserData,logOut}}>
        {children}
      </AuthContext.Provider>
    </>
  )
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}