import React from "react";
import { Col } from "../Grid";
import "./style.css";

export function Tile(props) {
  return (
    <Col size="md-3">
      <img src={props.url} alt={props.id} onClick={props.onClick} />
    </Col>
  );
}

export default Tile;
