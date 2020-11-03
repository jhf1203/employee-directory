import React, { useState } from "react";
import employees from "../employees.json"
import tableWrapper from "./TableWrapper"

// How to render this within the table element in TableWrapper?
// - Use divs for each row in TableWrapper?
// - Let <table> live in App.js, have one component for the header and one for the content?
// - Render this as a second table that will have the same formatting as TableWrapper?

function TableContent(props) {

    const [contentState, setContentState] = useState({
        employees
      });
      //console.log(contentState)


      return (
    
        <tr className="employeeRow" key={props.id}>
            <td className="colNameF">{props.employee.firstName}</td>
            <td className="colNameL">{props.employee.lastName}</td>
            <td className="colEmail">{props.employee.email}</td>
            <td className="colDept">{props.employee.department}</td>
            <td className="colHireDate">{props.employee.date}</td>
            <td className="colGender">{props.employee.gender}</td>
         </tr>
);
  
}

export default TableContent;
