import React, { useState } from "react";
import TableContent from "./TableContent"
import employees from "../employees.json"

function TableWrapper(props) {

    

    

// Will need functions here to filter and sort

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
          <td><input className="filterInput" type="text" placeholder="Filter Here"></input></td>
          <td><input className="filterInput" type="text" placeholder="Filter Here"></input></td>
          <td><input className="filterInput" type="text" placeholder="Filter Here"></input></td>
          <td><input className="filterInput" type="text" placeholder="Filter Here"></input></td>
          <td><input className="filterInput" type="text" placeholder="Filter Here"></input></td>
          <td><input className="filterInput" type="text" placeholder="Filter Here"></input></td>
        </tr>
        <tr className="sortRow">
          <td className="sortField"><p className="sortText">Sort<i className="button btn fa fa-caret-up"></i><i className="button btn fa fa-caret-down"></i></p></td>
          <td className="sortField"><p className="sortText">Sort<i className="button btn fa fa-caret-up"></i><i className="button btn fa fa-caret-down"></i></p></td>
          <td className="sortField"><p className="sortText">Sort<i className="button btn fa fa-caret-up"></i><i className="button btn fa fa-caret-down"></i></p></td>
          <td className="sortField"><p className="sortText">Sort<i className="button btn fa fa-caret-up"></i><i className="button btn fa fa-caret-down"></i></p></td>
          <td className="sortField"><p className="sortText">Sort<i className="button btn fa fa-caret-up"></i><i className="button btn fa fa-caret-down"></i></p></td>
          <td className="sortField"><p className="sortText">Sort<i className="button btn fa fa-caret-up"></i><i className="button btn fa fa-caret-down"></i></p></td>
        </tr>
          <TableContent />
       </table>
     </div>
    </div>
  );
}

export default TableWrapper;
