import React, { useState } from "react";
import TableContent from "./TableContent"
import employees from "../employees.json"

function TableWrapper(props) {

    
  const [wrapperState, setWrapperState] = useState({
    employees
  });
  console.log(contentState)
    

// Will need functions here to filter and sort

function handleSortAsc(field) {
  employees.sort((a, b) => {
      return a.field - b.field
  })
};

function handleSortDesc(field) {
  employees.sort((a, b) => {
      return b.field - a.field
  })
}

  handleFilter = (event) => {
  setWrapperState({
    ...employees,
    employees.event.target.name,
    ...employees
  })
}

  return (
    <div>
      <header>
        <h1>Some Header Text</h1>
      </header>
     <div className="container">
       <table>
        <tr className="headRow">
          <th className="nameF">First Name</th>
          <th className="nameL">Last Name</th>
          <th className="eMail">E-Mail</th>
          <th className="dept">Department</th>
          <th className="hireDate">Hire Date</th>
          <th className="gender">Gender</th>
        </tr>
        <tr className="inputRow">
          <td><input className="filterInput" type="text" placeholder="Filter Here" name="firstName" onChange={handleFilter}></input></td>
          <td><input className="filterInput" type="text" placeholder="Filter Here" name="lastName" onChange={handleFilter}></input></td>
          <td><input className="filterInput" type="text" placeholder="Filter Here" name="email" onChange={handleFilter}></input></td>
          <td><input className="filterInput" type="text" placeholder="Filter Here" name="department" onChange={handleFilter}></input></td>
          <td><input className="filterInput" type="text" placeholder="Filter Here" name="date" onChange={handleFilter}></input></td>
          <td><input className="filterInput" type="text" placeholder="Filter Here" name="gender" onChange={handleFilter}></input></td>
        </tr>
        <tr className="sortRow">
          <td className="sortField"><p className="sortText">Sort<i className="button btn fa fa-caret-up" onClick={TableContent.handleSortAsc(firstName)}></i><i className="button btn fa fa-caret-down" onClick={TableContent.handleSortDesc(firstName)}></i></p></td>
          <td className="sortField"><p className="sortText">Sort<i className="button btn fa fa-caret-up" onClick={TableContent.handleSortAsc(lastName)}></i><i className="button btn fa fa-caret-down" onClick={TableContent.handleSortDesc(lastName)}></i></p></td>
          <td className="sortField"><p className="sortText">Sort<i className="button btn fa fa-caret-up" onClick={TableContent.handleSortAsc(email)}></i><i className="button btn fa fa-caret-down" onClick={TableContent.handleSortDesc(email)}></i></p></td>
          <td className="sortField"><p className="sortText">Sort<i className="button btn fa fa-caret-up" onClick={TableContent.handleSortAsc(department)}></i><i className="button btn fa fa-caret-down" onClick={TableContent.handleSortDesc(department)}></i></p></td>
          <td className="sortField"><p className="sortText">Sort<i className="button btn fa fa-caret-up" onClick={TableContent.handleSortAsc(date)}></i><i className="button btn fa fa-caret-down" onClick={TableContent.handleSortDesc(date)}></i></p></td>
          <td className="sortField"><p className="sortText">Sort<i className="button btn fa fa-caret-up" onClick={TableContent.handleSortAsc(gender)}></i><i className="button btn fa fa-caret-down" onClick={TableContent.handleSortDesc(gender)}></i></p></td>
        </tr>
          <TableContent />
       </table>
     </div>
    </div>
  );
}

export default TableWrapper;
