import React from "react"
import {useLocation, useNavigationType, useNavigate} from "react-router-dom"

import LoginContext from "../ context/LoginContext"


export default function useConfirmLogout(){

    const location = useLocation();
    const navType = useNavigationType();
    const navigate = useNavigate();
    const secret = React.useContext(LoginContext);



    React.useEffect(()=>{
        if(secret.LoginCred.isLogged && location.path === '/' && navType === 'POP'){
            const confirmIt = window.confirm("Are you sure???? YOU WILL BE LOGGED OUT!");
            
            if(confirmIt){
                secret.setLoginCred({isLogged:false,emp:null,isAdmin:false});
                // good practise, but my app is immune to forward popState event, hail ProtectedRoutes!
                // navigate('/',{replace:true})
            }else{
                navigate(-1);
            }
        }
    },[location.pathname]
    )
}