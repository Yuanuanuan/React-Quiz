import quizCompleteImg from "../assets/quiz-complete.png";

export default function Summary() {
  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="" />
      <h2>Quiz Complete!</h2>
      <div id="summary-stats">
        <p>
          <span className="number"></span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number"></span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number"></span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {
          <li>
            <h3>index</h3>
            <p className="question">question text</p>
            <p className="">answer</p>
          </li>
        }
      </ol>
    </div>
  );
}
