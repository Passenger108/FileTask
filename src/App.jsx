import React from "react"
import {BrowserRouter, Routes, Route } from "react-router-dom"
import {employees} from "./utils/data"

import MainLayout from "./Layouts/MainLayout"

import LoginForm from "./pages/LoginForm"
import AdminPage from "./pages/AdminPage"
import UserPage from "./pages/UserPage"
import CreateTaskPage from "./pages/CreateTaskPage"
import Employees from "./pages/Employees"
import EmpDetailLayout from "./Layouts/EmpDetailLayout"
import UserTasks from "./pages/UserTasks"
import UserDashboard from "./pages/UserDashboard"



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route path="user" element={<UserPage/>}/>
          <Route path="user/action" element={<UserTasks user={employees[0]}/>}/>
          <Route path ="user/tasks" element={<UserDashboard user={employees[0]}/>}/>

          <Route path="admin" element={<AdminPage />}/>
          <Route path="admin/createtask" element={<CreateTaskPage/>}/>
          <Route path="admin/employees" element={<Employees/>}/>
          <Route path="admin/employees/:id" element={<EmpDetailLayout/>} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}