import React from "react";
import QuestionDetails from "./QuestionDetails";
import AnswerDetails from "./AnswerDetails";

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

export default QuestionShowPage;
