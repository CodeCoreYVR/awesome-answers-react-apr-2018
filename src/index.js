import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

// All React component names must begin with a capital letter
function QuestionDetails(props) {
  // When destructuring, we can set a default
  // value if the property we destructure doesn't exist.
  const { author = {} } = props;

  return (
    <div className="QuestionDetails">
      <h1>{props.title}</h1>
      <p>{props.body}</p>
      <p>By {author.full_name}</p>
      <p>
        <strong>View Count:</strong> {props.view_count}
      </p>
      <p>
        <strong>Created at:</strong> {props.created_at.toLocaleString()}
      </p>
    </div>
  );
}

function AnswerDetails() {
  return (
    <div className="AnswerDetails">
      <p>Red.</p>
      <p>By King Arthur</p>
      <p>
        <strong>Created At:</strong> 2018-01-02
      </p>
    </div>
  );
}

function QuestionShowPage() {
  return (
    <main className="QuestionShowPage">
      <QuestionDetails
        title="What is your favourite colour?"
        body="Red, green, blue, magenta, yellow, cyan, etc."
        author={{ full_name: "Bridge Troll" }}
        view_count={10}
        created_at={new Date()}
      />
      <AnswerDetails />
    </main>
  );
}

ReactDOM.render(<QuestionShowPage />, document.getElementById("root"));
registerServiceWorker();
