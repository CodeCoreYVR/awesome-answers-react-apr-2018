import React from "react";
import Field from "./Field";
import allQuestions from "../data/allQuestions";

function QuestionIndexPage(props) {
  return (
    <main className="QuestionIndexPage">
      <h1>Questions</h1>
      <ul style={{ padding: 0, listStyle: "none" }}>
        {allQuestions.map(question => (
          <li key={question.id}>
            <a href="">{question.title}</a>
            <Field name="Author" value={question.author.full_name} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default QuestionIndexPage;
