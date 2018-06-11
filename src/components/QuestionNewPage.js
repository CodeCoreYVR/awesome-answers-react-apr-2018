import React, { Component } from "react";
import QuestionForm from "./QuestionForm";
import Question from "../requests/question";

class QuestionNewPage extends Component {
  constructor(props) {
    super(props);
    this.createQuestion = this.createQuestion.bind(this);
  }

  createQuestion(params) {
    Question.create(params).then(({ id }) => {
      // https://reacttraining.com/react-router/web/api/history
      // The `history` is passed to components when
      // they're renderer by the <Route /> component
      this.props.history.push(`/questions/${id}`);
    });
  }

  render() {
    return (
      <main className="QuestionNewPage">
        <h2>New Question</h2>
        <QuestionForm onSubmit={this.createQuestion} />
      </main>
    );
  }
}

export default QuestionNewPage;
