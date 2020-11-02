import React, { useState } from "react";
import employees from "../employees.json"

// How to render this within the table element in TableWrapper?
// - Use divs for each row in TableWrapper?
// - Let <table> live in App.js, have one component for the header and one for the content?
// - Render this as a second table that will have the same formatting as TableWrapper?

function TableContent(props) {

    const [tableState, setTableState] = useState({
        employees
      });
      console.log(tableState)
  return (
    <div>
        
        {employees.map(employee => (
            <tr className="employeeRow" key={employee.id}>
                <td className="colNameF">{employee.firstName}</td>
                <td className="colNameL">{employee.lastName}</td>
                <td className="colEmail">{employee.email}</td>
                <td className="colDept">{employee.department}</td>
                <td className="colHireDate">{employee.date}</td>
                <td className="colGender">{employee.gender}</td>
            </tr>
        ))}
    </div>
  );
  
}

export default TableContent;
