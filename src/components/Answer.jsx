import QUESTIONS from "../questions";

export default function Answer({ activeQuestionIndex, onSelect }) {
  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <ul id="answers">
      {shuffledAnswers.map((answer) => {
        return (
          <li key={answer} className="answer">
            <button className="" onClick={() => onSelect(answer)}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
