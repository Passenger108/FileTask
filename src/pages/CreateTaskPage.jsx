import React, { useState,useContext } from 'react';
import DataContext from "../ context/DataContext"
import './CreateTaskPage.css';
// import { employees } from '../utils/data'; 
import {useNavigate} from "react-router-dom"

const CreateTaskPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    assignedTo: '',
    category: '',
    description: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const server = useContext(DataContext);
  const employees = server.database

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.id]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    const maxDescLength = 245;

    if (!formData.title.trim()) {
      newErrors.title = 'Task title is required';
    } else if (formData.title.length > 40) {
      newErrors.title = 'Task title must be under 40 characters';
    }

    if (!formData.date) {
      newErrors.date = 'Date is required';
    }

    if (!formData.assignedTo.trim()) {
      newErrors.assignedTo = 'Assigned To is required';
    } else if (!employees.some(emp => emp.id == formData.assignedTo)) {
      newErrors.assignedTo = 'No such employee exists';
    }

    if (!formData.category.trim()) {
      newErrors.category = 'Category is required';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Task description is required';
    } else if (formData.description.length > maxDescLength) {
      newErrors.description = `Description must be under ${maxDescLength} characters`;
    }

    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    alert('Task Created Successfully!');
    // handling task creation logic ...
    console.log(formData);
    let newFormData = {}
    for(let key in formData){
      if(key=="id"||key=="category"||key=="assignedTo")
      newFormData[key]=formData[key]
      else
        newFormData[`task${key[0].toUpperCase()+key.slice(1)}`] = formData[key]
    }
    
    let targetEmp = employees.find(emp=>emp.id==formData.assignedTo)
    let nextId = targetEmp.nextId
    let newTask = {...newFormData, id:nextId,status:"newTask"}
    let newTaskList = [...targetEmp.tasks,newTask]
    let newDatabase = employees.filter(emp=>emp.id!=formData.assignedTo)
    targetEmp = {...targetEmp,nextId:nextId+1,tasks:newTaskList,taskCounts:{...targetEmp.taskCounts,newTask:targetEmp.taskCounts.newTask+1}}
    console.log("new database",[...newDatabase,targetEmp])
    server.setDatabase([...newDatabase,targetEmp])

     navigate("/admin")
  };

  return (
    <div className="create-task-container">
      <div className="create-task-left">
        {['title', 'date', 'assignedTo', 'category'].map((field) => (
          <div className="form-group" key={field}>
            <label htmlFor={field}>{field === 'assignedTo' ? 'Assigned To' : field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              type={field === 'date' ? 'date' : 'text'}
              id={field}
              value={formData[field]}
              onChange={handleChange}
              className={errors[field] ? 'ccerror' : ''}
              placeholder={field === 'assignedTo' ? 'Employee ID' : `Enter ${field}`}
            />
            {errors[field] && <p className="ccerror-msg">{errors[field]}</p>}
          </div>
        ))}
      </div>

      <div className="create-task-right">
        <label htmlFor="description" className="desc-label">Task Description</label>
        <textarea
          id="description"
          value={formData.description}
          onChange={handleChange}
          className={errors.description ? 'ccerror' : ''}
          placeholder="Write full task description here..."
        />
        {errors.description && <p className="ccerror-msg">{errors.description}</p>}
        <button className="create-btn" onClick={handleSubmit}>Create Task</button>
      </div>
    </div>
  );
};

export default CreateTaskPage;