import React from "react";
import QuestionDetails from "./QuestionDetails";
import AnswerList from "./AnswerList";
import detailedQuestion from "../data/detailedQuestion";

function QuestionShowPage() {
  return (
    <main className="QuestionShowPage">
      <QuestionDetails {...detailedQuestion} />
      <AnswerList answers={detailedQuestion.answers} />
    </main>
  );
}

export default QuestionShowPage;
