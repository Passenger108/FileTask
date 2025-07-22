import React, { useState,useContext } from 'react';
import DataContext from "../ context/DataContext"
import './CreateNewEmployee.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { employees } from '../utils/data'; 

import {useNavigate} from "react-router-dom"

const CreateNewEmployee = () => {
    console.log("create Employee Page")
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password : ''
  });
  const [errors, setErrors] = useState({});
  const[showPassword,setShowPassword] = useState(false);
  const navigate = useNavigate();

  const server = useContext(DataContext);
  const employees = server.database

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

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required, Admin!';
      console.log("email requied")
    } else if (!formData.email.toLowerCase().endsWith("@saini.com") ) {
      newErrors.email = 'Valid Email : example@saini.com';
      console.log("email format wrong")
    }else if(employees.find(emp=>emp.email==formData.email.toLowerCase())){
      newErrors.email = 'Email already exist!'
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

    alert('employee added Successfully!');
    // handling new employee  addition logic ...
    let newEmployee = {
        id:employees.count + 1,
        name:formData.name.split(' ').map(word=>word[0].toUpperCase()+word.slice(1)).join(' '),
        email:formData.email.toLowerCase(),
        password:formData.password,
        nextId:1,
        taskCounts: { active: 0, newTask: 0, completed: 0, failed: 0 },
        tasks:[]
    }
    let newEmployees =[...employees,newEmployee];
    newEmployees.count = employees.count + 1;
    server.setDatabase(newEmployees);
    console.log("New Employee Added", newEmployee)
    console.log("Updated Database", server.database)

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
              onChange={handleChange}
              className={errors[field] ? 'ccerror' : ''}
              placeholder={`Enter ${field}`}
            />
            {field=='password' ? (showPassword ? <FaEye className='eye' onClick={handleEye} /> : <FaEyeSlash className='eye' onClick={handleEye}/>): null}
            </div>
            {errors[field] && <p className="ccerror-msg">{errors[field]}</p>}
          </div>
        ))}

        <button className="new-btn" onClick={handleSubmit}>Add Employee</button>
      </div>
    </div>
  );
};

export default CreateNewEmployee;