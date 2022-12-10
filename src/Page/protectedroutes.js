import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";


export const ProtectedRoutes=()=>{
    const {login}= useSelector((state) => state)
    const navigate = useNavigate()

    useEffect(()=>{
      if (!login){
        navigate("/login")
      }
    },[login])
    return <Outlet/>
  }
  
  export const ProtectedRoutesLogin=()=>{
    const {login}= useSelector((state) => state)
    const navigate = useNavigate()
    useEffect(()=>{
      if (login){
        navigate("/profile")
      }
    },[login])
    return <Outlet/>
  } 