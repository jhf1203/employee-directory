import React from "react";

function TableContent(props) {
  return (
    // Rendering each table row into TableWrapper.js
    <tr className="employeeRow" key={props.id}>
      <td className="colNameF tdContent">{props.employee.firstName}</td>
      <td className="colNameL tdContent">{props.employee.lastName}</td>
      <td className="colEmail tdContent">{props.employee.email}</td>
      <td className="colDept tdContent">{props.employee.department}</td>
      <td className="colHireDate tdContent">{props.employee.date}</td>
      <td className="colGender tdContent">{props.employee.gender}</td>
    </tr>
  );  
}

export default TableContent;
