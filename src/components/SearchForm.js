import React from "react";
import "./styles/Search.css";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Employee Search"
          id="search"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
