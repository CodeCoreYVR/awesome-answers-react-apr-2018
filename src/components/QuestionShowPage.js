// In the following import, the first import is export as a default
// by the "react" package. The second import within braces {} is called a named
// import and was exported without the "default" keyword by the "react" package.
import React, { Component } from "react";
import QuestionDetails from "./QuestionDetails";
import AnswerList from "./AnswerList";
import detailedQuestion from "../data/detailedQuestion";

class QuestionShowPage extends Component {
  render() {
    return (
      <main className="QuestionShowPage">
        <QuestionDetails {...detailedQuestion} />
        <AnswerList answers={detailedQuestion.answers} />
      </main>
    );
  }
}

export default QuestionShowPage;
