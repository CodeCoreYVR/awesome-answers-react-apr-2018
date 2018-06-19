import React from "react";

const FormErrors = props => {
  const { forField, errors = [] } = props;

  let filteredErrors;
  if (forField) {
    filteredErrors = errors.filter(
      e => e.field.toLowerCase() === forField.toLowerCase()
    );
  } else {
    filteredErrors = errors;
  }

  return (
    <ul className="FormErrors">
      {filteredErrors.map((err, i) => <li key={i}>{err.message}</li>)}
    </ul>
  );
};

export default FormErrors;
