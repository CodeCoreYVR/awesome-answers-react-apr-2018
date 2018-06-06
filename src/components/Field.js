import React from "react";

function Field(props) {
  return (
    <p>
      <strong>{props.name}:</strong> {props.value}
    </p>
  );
}

export default Field;
