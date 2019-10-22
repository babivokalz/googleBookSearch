import React from "react";
import "./style.css";

function displayAlert(props) {
  console.log(props);
  if (props.value.status === "none") {
    return null;
  } else {
    return (
      <div className={`alert alert-${props.value.status}`}>
        {props.value.text}
      </div>
    );
  }
}

function Alert(props) {
  return <span>{displayAlert(props)}</span>;
}

export default Alert;
