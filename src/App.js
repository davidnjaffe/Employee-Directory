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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
