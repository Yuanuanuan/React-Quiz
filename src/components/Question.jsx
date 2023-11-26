import { useCallback } from "react";

import QuestionTimer from "./QuestionTimer";
import Answer from "./Answer";
import QUESTIONS from "../questions";

export default function Question({ activeQuestionIndex, onSelectAnswer }) {
  const handleSkipAnswer = useCallback(
    () => onSelectAnswer(null),
    [onSelectAnswer]
  );

  return (
    <div id="question">
      <QuestionTimer
        key={activeQuestionIndex}
        timeout={10000}
        onTimeout={handleSkipAnswer}
      />
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      <Answer
        activeQuestionIndex={activeQuestionIndex}
        onSelect={onSelectAnswer}
      />
    </div>
  );
}
