import React from "react";

import Select from "./Select";
type QuestionFormProps = {
  category: string;
  question: string;
  handleSubmit: Function;
  questionId: number;
};
const QuestionForm: React.FC<QuestionFormProps> = ({
  category,
  question,
  handleSubmit,
  questionId,
}) => {
  return (
    <div className="question-wrapper">
      <h3>This question is about: {category}</h3>
      <div className="question-card">
        <form>
          <h4>
            <em>{question}</em>
          </h4>
          <Select option="True" submit={handleSubmit} />
          <Select option="False" submit={handleSubmit} />
        </form>
      </div>
      <p>{questionId} of 10</p>
    </div>
  );
};

export default QuestionForm;
