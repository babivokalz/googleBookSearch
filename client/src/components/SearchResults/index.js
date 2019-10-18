import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchResults(props) {
  return (
    <div className="result-row">
      <h3>Results</h3>

      <Row>
        <Col size="md-12">
          <button
            type="submit"
            onClick={props.handleFormSubmit}
            className="btn btn-primary"
          >
            View
          </button>
          <button
            type="submit"
            onClick={props.handleFormSubmit}
            className="btn btn-primary"
          >
            Save
          </button>
          <h4>Title</h4>
          <h5>Sub-title</h5>
          <h6>Written by: Author</h6>
        </Col>
        <Col size="md-2 sm-4">
          <img src="https://via.placeholder.com/150x150" alt="" />
        </Col>
        <Col size="md-10">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default SearchResults;
