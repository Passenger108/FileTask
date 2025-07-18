import { employees } from '../utils/data';
import EmpCard from '../components/EmpCard';
import {Link} from "react-router-dom"

export default function Employees() {
  return (
    <div className="employees-container" >
      {employees.map((emp) => (
        <Link key={emp.id} to={`${emp.id}`} state={emp}>
          <EmpCard employee={emp} />
        </Link>
      ))}
    </div>
  );
}