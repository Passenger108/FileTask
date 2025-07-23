import React, { useState,useContext } from 'react';
import DataContext from "../ context/DataContext"
import './EditEmployeePage.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { employees } from '../utils/data'; 

import {useNavigate, useLocation} from "react-router-dom"

const EditEmployeePage = () => {
    console.log("Edit Employee Page")
    const server = useContext(DataContext);
    const employees = server.database
    const location = useLocation();
    const idDetail = location.pathname.split('/')[4];
    const targetEmpData = employees.find(emp=>emp.id == idDetail )

  const [formData, setFormData] = useState({
    name: targetEmpData.name,
    email: targetEmpData.email,
    password : targetEmpData.password
  });
  const [errors, setErrors] = useState({});
  const[showPassword,setShowPassword] = useState(false);
  const navigate = useNavigate();


   function handleEye(){
    setShowPassword(value=>!value)
  } 

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.id]: '' }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
        newErrors.name = 'Name is required, Admin!';
        console.log("Name required")
    } else if (!(formData.name.trim().toLowerCase().endsWith("saini")) ) {
      newErrors.name = 'Employee must be Saini !!';
    }else if(formData.name.trim().split(' ').length < 2){
        newErrors.name = 'Enter full Name'
    }
    
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required, Admin!';
      console.log("password required")
    } else if (formData.password.length<3){
      newErrors.password= 'you lazy, enter atleast 3 chars'
    }
    return newErrors;
  };

  const handleSubmit = () => {
    console.log("validating form")
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    alert('employee edited Successfully!');
    // handling new employee  addition logic ...
    let newEmployee = {
      ...targetEmpData,
        name:formData.name.split(' ').map(word=>word[0].toUpperCase()+word.slice(1)).join(' '),
        password:formData.password
    }
    let restEmployees = employees.filter(emp=>emp.id != idDetail)
    let newEmployees =[...restEmployees,newEmployee];
    newEmployees.count = employees.count;
    server.setDatabase(newEmployees);
    console.log(" Employee was edited", newEmployee)
    console.log("Updated Database", newEmployees)

    navigate(-1);
  };

  return (
    <div className="create-new-container">
      <div className="create-new-left">
        {['name', 'email', 'password'].map((field) => (
          <div className="form-group" key={field}>
            <label htmlFor={field}>
                {field.charAt(0).toUpperCase() + field.slice(1)} 
            </label>
            <div className='input-container'>
            <input
              type={field === "password" && !showPassword ? 'password': 'text'}
              id={field}
              value={formData[field]}
              disabled={field == 'email'}
              onChange={handleChange}
              className={errors[field] ? 'ccerror' : ''}
              placeholder={`Enter ${field}`}
            />
            {field=='password' ? (showPassword ? <FaEye className='eye' onClick={handleEye} /> : <FaEyeSlash className='eye' onClick={handleEye}/>): null}
            </div>
            {errors[field] && <p className="ccerror-msg">{errors[field]}</p>}
          </div>
        ))}

        <button className="new-btn" onClick={handleSubmit}>Edit Details</button>
      </div>
    </div>
  );
};

export default EditEmployeePage;