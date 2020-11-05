import React, { useState } from "react";
import TableContent from "./TableContent"
import employees from "../employees.json"

function TableWrapper() {

  // Hook to define states
  const [wrapperState, setWrapperState] = useState({
    employees,
    filteredEmps: [],
  });

  // Function to sort employees ascending
function handleSortAsc(field) {
  
    let newFilteredAsc = employees.sort(( a, b ) => {
      if ( a[field] < b[field] ){
        return -1;
      }
      if ( a[field] > b[field] ){
        return 1;
      }
      return 0;
    })
  
    setWrapperState({...wrapperState, filteredEmps: newFilteredAsc, })
  
  }
  
  // Function to sort employees in descending order
function handleSortDesc(field) {
  let newFilteredDesc = employees.sort(( a, b ) => {
    if ( a[field] > b[field] ){
      return -1;
    }
    if ( a[field] < b[field] ){
      return 1;
    }
    return 0;
  })

  
  setWrapperState({...wrapperState, filteredEmps: newFilteredDesc, })
}

  // Function to handle filters
  const handleFilter = (event) => {

    const newFiltered = []

    wrapperState.employees.map (employee => {
      if (employee[event.target.name].toLowerCase().substring(0, event.target.value.length) === event.target.value.toLowerCase()) {
        newFiltered.push(employee)
      }
    })

    setWrapperState({...wrapperState, filteredEmps: newFiltered })

}
  let empsToDisplay = wrapperState.employees

  if (wrapperState.filteredEmps.length > 0) {
    empsToDisplay = wrapperState.filteredEmps
  }

  // Static text that will always render
  return (
    <div>
      <header className="jumbotron">
        <h1>Our Team</h1>
      </header>
     <div className="container-fluid">
       <table>
        <tr className="headRow">
          <th className="nameF colHead">First Name</th>
          <th className="nameL colHead">Last Name</th>
          <th className="eMail colHead">E-Mail</th>
          <th className="dept colHead">Department</th>
          <th className="hireDate colHead">Hire Date</th>
          <th className="gender colHead">Gender</th>
        </tr>
        <tr className="inputRow">
          <td className="colHead"><input className="filterInput" type="text" placeholder="Filter Here" name="firstName" onChange={handleFilter}></input></td>
          <td className="colHead"><input className="filterInput" type="text" placeholder="Filter Here" name="lastName" onChange={handleFilter}></input></td>
          <td className="colHead"><input className="filterInput" type="text" placeholder="Filter Here" name="email" onChange={handleFilter}></input></td>
          <td className="colHead"><input className="filterInput" type="text" placeholder="Filter Here" name="department" onChange={handleFilter}></input></td>
          <td className="colHead"><input className="filterInput" type="text" placeholder="Filter Here" name="date" onChange={handleFilter}></input></td>
          <td className="colHead"><input className="filterInput" type="text" placeholder="Filter Here" name="gender" onChange={handleFilter}></input></td>
        </tr>
        <tr className="sortRow">
          <td className="sortField colHead"><p className="sortText">Sort<i className="button btn fa fa-caret-up" onClick={() => handleSortAsc('firstName')}></i><i className="button btn fa fa-caret-down" onClick={() => handleSortDesc('firstName')}></i></p></td>
          <td className="sortField colHead"><p className="sortText">Sort<i className="button btn fa fa-caret-up" onClick={() => handleSortAsc('lastName')}></i><i className="button btn fa fa-caret-down" onClick={() => handleSortDesc('lastName')}></i></p></td>
          <td className="sortField colHead"><p className="sortText">Sort<i className="button btn fa fa-caret-up" onClick={() => handleSortAsc('email')}></i><i className="button btn fa fa-caret-down" onClick={() => handleSortDesc('email')}></i></p></td>
          <td className="sortField colHead"><p className="sortText">Sort<i className="button btn fa fa-caret-up" onClick={() => handleSortAsc('department')}></i><i className="button btn fa fa-caret-down" onClick={() => handleSortDesc('department')}></i></p></td>
          <td className="sortField colHead"><p className="sortText">Sort<i className="button btn fa fa-caret-up" onClick={() => handleSortAsc('date')}></i><i className="button btn fa fa-caret-down" onClick={() => handleSortDesc('date')}></i></p></td>
          <td className="sortField colHead"><p className="sortText">Sort<i className="button btn fa fa-caret-up" onClick={() => handleSortAsc('gender')}></i><i className="button btn fa fa-caret-down" onClick={() => handleSortDesc('gender')}></i></p></td>
        </tr>

        {/* Rendering from TableContent component */}
        {empsToDisplay.map((employee)=> { 
           return ( <TableContent employee={employee} />)
         })}
       </table>
     </div>
    </div>
  );
}

export default TableWrapper;
