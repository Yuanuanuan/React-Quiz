import QuestionTimer from "./QuestionTimer";
import Answer from "./Answer";
import QUESTIONS from "../questions";

export default function Question({ activeQuestionIndex, onSelectAnswer }) {
  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={() => onSelectAnswer(null)} />
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      <Answer
        activeQuestionIndex={activeQuestionIndex}
        onSelect={onSelectAnswer}
      />
    </div>
  );
}
