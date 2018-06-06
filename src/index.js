import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

// All React component names must begin with a capital letter
function QuestionDetails() {
  return (
    <div className="QuestionDetails">
      <h1>What is your favourite colour?</h1>
      <p>Red, green, blue, magenta, yellow, cyan, etc.</p>
      <p>By Bridge Troll</p>
      <p>
        <strong>View Count:</strong> 111
      </p>
      <p>
        <strong>Created at:</strong> 2018-01-01
      </p>
    </div>
  );
}

ReactDOM.render(<QuestionDetails />, document.getElementById("root"));
registerServiceWorker();
