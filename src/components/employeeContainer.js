import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import Employees from "./EmployeeData";
import API from "../utils/API";


class EmployeeContainer extends Component {
  state = {
    search: "",
    employeeList: [],
    employeeFilter: [],
    listOrder: ""
  };

  componentDidMount() {
   
    API.getUsers().then(res => this.setState({
        
      employeeList: res.data.results,
      employeeFilter: res.data.results
      
    })).catch(err => console.log(err))

    
  }

  
  sortEmByName = () => {
    const emFilter = this.state.employeeFilter;
    if (this.state.listOrder === "ascending") {
      const emSort = emFilter.sort((empA, empB) => (empA.name.first > empB.name.first) ? 1 : -1)
      this.setState({
        employeeFilter: emSort,
        listOrder: "descending"
      })
    } else {
      const emSort = emFilter.sort((empA, empB) => (empA.name.first > empB.name.first) ? -1 : 1)
      
      this.setState({
        employeeFilter: emSort,
        listOrder: "ascending"
      })
    }
  }


  searchUsers = () => {
    API.getUsers().then(res => this.setState({
      employeeList: res.data.results,
      employeeFilter: res.data.results,
    })).catch(err => console.log(err));
  };

  
  handleInputChange = event => {
    const employeeList = this.state.employeeList;
    const input = event.target.value.toLowerCase();
    const employeeFilter = employeeList.filter(employee => employee.name.first.toLowerCase().indexOf(input) > -1)
    this.setState({
      employeeFilter
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                employee={this.state.employeeList}
                handleInputChange={this.handleInputChange}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-8">
            <Card
              
            >
              <Employees results={this.state.employeeFilter}
                sortEmByName={this.sortEmByName}
              />

            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EmployeeContainer;