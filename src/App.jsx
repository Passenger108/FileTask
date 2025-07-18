import React from "react"
import {BrowserRouter, Routes, Route } from "react-router-dom"

import MainLayout from "./Layouts/MainLayout"

import LoginForm from "./pages/LoginForm"
import AdminPage from "./pages/AdminPage"
import CreateTaskPage from "./pages/CreateTaskPage"
import Employees from "./pages/Employees"
import EmpDetailLayout from "./Layouts/EmpDetailLayout"



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route path="admin" element={<AdminPage />}/>
          <Route path="admin/createtask" element={<CreateTaskPage/>}/>
          <Route path="admin/employees" element={<Employees/>}/>
          <Route path="admin/employees/:id" element={<EmpDetailLayout/>} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}