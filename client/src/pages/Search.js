import React, { Component } from "react";

import { Col, Row, Container } from "../components/Grid";

import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

import Tile from "../components/Tile";
import Alert from "../components/Alert";
// import { shuffle, colors } from "../util/Colors";

class Search extends Component {
  state = {};

  componentDidMount() {}

  clickTile = event => {};

  render() {
    return (
      <div>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <SearchForm />

            <SearchResults />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Search;
