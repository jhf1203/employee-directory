import React, { useState } from "react";
import TableContent from "./TableContent"
import employees from "../employees.json"

function TableWrapper(props) {

    
  const [wrapperState, setWrapperState] = useState({
    employees,
    filteredEmps: [],
  });

    

// Will need functions here to filter and sort

function handleSortAsc(field) {
  
    var newFilteredAsc = employees.sort(( a, b ) => {
      if ( a[field] < b[field] ){
        return -1;
      }
      if ( a[field] > b[field] ){
        return 1;
      }
      return 0;
    })
  
    
    console.log('field', field)
    setWrapperState({...wrapperState, filteredEmps: newFilteredAsc, })
  
  }
  
function handleSortDesc(field) {
  var newFilteredAsc = employees.sort(( a, b ) => {
    if ( a[field] > b[field] ){
      return -1;
    }
    if ( a[field] < b[field] ){
      return 1;
    }
    return 0;
  })

  
  console.log('field', field)
  setWrapperState({...wrapperState, filteredEmps: newFilteredAsc, })
}

  var handleFilter = (event) => {
    console.log('HANDLE FILTER!!!!', event.target.value)

    var newFiltered = []

    wrapperState.employees.map (employee => {
      if (employee[event.target.name].substring(0, event.target.value.length) === event.target.value) {
        console.log(' found a match!!')
        newFiltered.push(employee)
      }
    })

    console.log('new filitered ppeeeps!!!', newFiltered)
    setWrapperState({...wrapperState, filteredEmps: newFiltered })
  // setWrapperState({
  //   ...employees,
  //   employees.event.target.name,
  //   ...employees
  // })
}
console.log('this is wrapper state', wrapperState)

  var empsToDisplay = wrapperState.employees

  if (wrapperState.filteredEmps.length > 0) {
    empsToDisplay = wrapperState.filteredEmps
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
          <td className="sortField"><p className="sortText">Sort<i className="button btn fa fa-caret-up" onClick={() => handleSortAsc('firstName')}></i><i className="button btn fa fa-caret-down" onClick={() => handleSortDesc('firstName')}></i></p></td>
          <td className="sortField"><p className="sortText">Sort<i className="button btn fa fa-caret-up" onClick={() => handleSortAsc('lastName')}></i><i className="button btn fa fa-caret-down" onClick={() => handleSortDesc('lastName')}></i></p></td>
          <td className="sortField"><p className="sortText">Sort<i className="button btn fa fa-caret-up" onClick={() => handleSortAsc('email')}></i><i className="button btn fa fa-caret-down" onClick={() => handleSortDesc('email')}></i></p></td>
          <td className="sortField"><p className="sortText">Sort<i className="button btn fa fa-caret-up" onClick={() => handleSortAsc('department')}></i><i className="button btn fa fa-caret-down" onClick={() => handleSortDesc('department')}></i></p></td>
          <td className="sortField"><p className="sortText">Sort<i className="button btn fa fa-caret-up" onClick={() => handleSortAsc('date')}></i><i className="button btn fa fa-caret-down" onClick={() => handleSortDesc('date')}></i></p></td>
          <td className="sortField"><p className="sortText">Sort<i className="button btn fa fa-caret-up" onClick={() => handleSortAsc('gender')}></i><i className="button btn fa fa-caret-down" onClick={() => handleSortDesc('gender')}></i></p></td>
        </tr>
        {empsToDisplay.map((employee)=> { 
           return ( <TableContent employee={employee} />)
         })}
       </table>
     </div>
    </div>
  );
}

export default TableWrapper;
