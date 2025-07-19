import React from "react"
import {Outlet, Navigate, useLocation} from "react-router-dom"

import LoginContext from "../ context/LoginContext"

export default function AuthRequired () {

    const secret = React.useContext(LoginContext);
    const location = useLocation();
    console.log(secret.loginCred)

    if(secret.loginCred.isLogged)
        return <Outlet/>
    else
       return (
            <Navigate 
                to="/"
                state={{pathname:location.pathname}}
                replace
            />
    )
}