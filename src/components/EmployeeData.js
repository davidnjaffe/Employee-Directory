import React from "react";
import "./styles/Data.css";

function Employees(props) {
  // console.log(props)
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th onClick={props.sortEmByName}>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>D.O.B.</th>
        </tr>
      </thead>
      <tbody className="">
        {props.results.map(result => (
          <tr key={result.login.uuid}>
            <td><img alt="" src={result.picture.thumbnail} /></td>
            <td><p>{result.name.first + " " + result.name.last}</p></td>
            <td><p>{result.email}</p></td>
            <td><p>{result.phone}</p></td>
            <td><p>{result.dob.date}</p></td>
          </tr>
        ))}
      </tbody>
    </table>
  )

}

export default Employees;