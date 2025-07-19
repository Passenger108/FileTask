import React from "react"
import DataContext from '../ context/DataContext';

import EmpCard from '../components/EmpCard';
import {Link} from "react-router-dom"

export default function Employees() {
  const server = React.useContext(DataContext)
  return (
    <div className="employees-container" >
      {server.database.sort((a,b)=>a.id-b.id).map((emp) => (
        <Link key={emp.id} to={`${emp.id}`} state={emp}>
          <EmpCard employee={emp} />
        </Link>
      ))}
    </div>
  );
}