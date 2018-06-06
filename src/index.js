import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

function Field(props) {
  return (
    <p>
      <strong>{props.name}:</strong> {props.value}
    </p>
  );
}

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
      <Field name="View Count" value={props.view_count} />
      <Field name="Created At" value={props.created_at.toLocaleString()} />
    </div>
  );
}

function AnswerDetails(props) {
  return (
    <div className="AnswerDetails">
      <p>{props.body}</p>
      <p>By {props.author.full_name}</p>
      <Field name="Created At" value={props.created_at.toLocaleString()} />
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
      <AnswerDetails
        body="Blue. No, wait!"
        author={{ full_name: "Sir Robin" }}
        created_at={new Date()}
      />
    </main>
  );
}

ReactDOM.render(<QuestionShowPage />, document.getElementById("root"));
registerServiceWorker();
