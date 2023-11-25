import QuestionTimer from "./QuestionTimer";
import Answer from "./Answer";

export default function Question() {
  return (
    <div id="question">
      <QuestionTimer />
      <h2>Question Text</h2>
      <Answer />
    </div>
  );
}
