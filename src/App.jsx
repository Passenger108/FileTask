import React from "react"
import {BrowserRouter, Routes, Route } from "react-router-dom"
import {employees} from "./utils/data"
import { adminList } from "./utils/adminList"

import DataContext from "./ context/DataContext"
import LoginContext from "./ context/LoginContext"

import MainLayout from "./Layouts/MainLayout"

import LoginForm from "./pages/LoginForm"
import AdminPage from "./pages/AdminPage"
import UserPage from "./pages/UserPage"
import CreateTaskPage from "./pages/CreateTaskPage"
import CreateNewEmployee from "./pages/CreateNewEmployee"
import Employees from "./pages/Employees"
import EmpDetailLayout from "./Layouts/EmpDetailLayout"
import UserTasks from "./pages/UserTasks"
import UserDashboard from "./pages/UserDashboard"

import AuthRequired from "./components/AuthRequired"



export default function App() {

  const [database, setDatabase] = React.useState(employees)
  const[loginCred, setLoginCred] = React.useState({isLogged:false,emp:null,isAdmin:false,adminList})

  return (
    <DataContext.Provider value={{database,setDatabase}}>
    <LoginContext.Provider value={{loginCred,setLoginCred}}>
    <BrowserRouter>
      <Routes>

      <Route path="/" element={<LoginForm/>}/>

      <Route element={<AuthRequired/>}>

        <Route path="/filetask" element={<MainLayout/>}>
          <Route path="user" element={<UserPage/>}/>
          <Route path="user/action" element={<UserTasks user={loginCred.emp}/>}/>
          <Route path ="user/tasks" element={<UserDashboard user={loginCred.emp}/>}/>

          <Route path="admin" element={<AdminPage />}/>
          <Route path="admin/createtask" element={<CreateTaskPage/>}/>
          <Route path="admin/createnewemployee" element={<CreateNewEmployee/>}/>
          <Route path="admin/employees" element={<Employees/>}/>
          <Route path="admin/employees/:id" element={<EmpDetailLayout/>} />
        </Route>

      </Route>
      </Routes>
    </BrowserRouter>
    </LoginContext.Provider>
    </DataContext.Provider>
  )
}