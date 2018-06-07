import React, { Component } from "react";
import Field from "./Field";
import allQuestions from "../data/allQuestions";

class QuestionIndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [...allQuestions]
      // using to create copy of allQuestions' to avoid mutating it
      // when mutating the error.
    };
  }

  render() {
    return (
      <main className="QuestionIndexPage">
        <h1>Questions</h1>
        <ul style={{ padding: 0, listStyle: "none" }}>
          {this.state.questions.map(question => (
            <li key={question.id}>
              <a href="">{question.title}</a>
              <Field name="Author" value={question.author.full_name} />
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default QuestionIndexPage;
