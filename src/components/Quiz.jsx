import { useState, useCallback } from "react";

import Question from "./Question";
import Summary from "./Summary";
import QUESTIONS from "../questions";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  // 用使用者回答的答案數量來判斷現在第幾題
  const activeQuestionIndex = userAnswers.length;
  const quizComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback((answer) => {
    setUserAnswers((prevAnswer) => [...prevAnswer, answer]);
  }, []);

  let content = (
    <Question
      activeQuestionIndex={activeQuestionIndex}
      onSelectAnswer={handleSelectAnswer}
    />
  );

  if (quizComplete) {
    content = <Summary />;
  }

  return <section id="quiz">{content}</section>;
}
