import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import QuestionShowPage from "./components/QuestionShowPage";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<QuestionShowPage />, document.getElementById("root"));
registerServiceWorker();
