import React, { Component } from "react";
import QuestionForm from "./QuestionForm";
import Question from "../requests/question";

class QuestionNewPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: []
    };

    this.createQuestion = this.createQuestion.bind(this);
  }

  createQuestion(params) {
    Question.create(params).then(data => {
      if (data.status === 422) {
        window._errors = data.errors;
        return this.setState({
          errors: data.errors
        });
      }
      // https://reacttraining.com/react-router/web/api/history
      // The `history` is passed to components when
      // they're renderer by the <Route /> component
      this.props.history.push(`/questions/${data.id}`);
    });
  }

  render() {
    return (
      <main className="QuestionNewPage">
        <h2>New Question</h2>
        <QuestionForm
          errors={this.state.errors}
          onSubmit={this.createQuestion}
        />
      </main>
    );
  }
}

export default QuestionNewPage;
