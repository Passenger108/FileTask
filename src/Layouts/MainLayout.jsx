
import React from "react"
import Header from "../components/Header"
import {Outlet,useNavigate} from "react-router-dom"

import LoginContext from "../ context/LoginContext"


export default function MainLayout () {

    const secret = React.useContext(LoginContext);
    const navigate = useNavigate();

    function handleLogout(){
        secret.setLoginCred(prev => ({...prev,isLogged:false,emp:null,isAdmin:false}))
        console.log("logged out")
        navigate("/")
    }

    return (
        <>
            <Header onLogout={handleLogout}/>
            <Outlet/>
        </>
    )
}