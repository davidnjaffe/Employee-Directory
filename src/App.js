import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./components/header";
import EmployeeContainer from "./components/employeeContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <EmployeeContainer />
      
    </div>
  );
}

export default App;
