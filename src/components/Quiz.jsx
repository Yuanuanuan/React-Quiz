import { useState, useCallback } from "react";

import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  // 使用者選取答案的array
  const [userAnswers, setUserAnswers] = useState([]);
 
  // 利用使用者選取答案的數量來決定現在第幾題
  const activeQuestionIndex = userAnswers.length;
  // 用現在題目的編號有沒有等於題庫的長度來判斷遊戲結束了嗎
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  // 處理使用者點擊事件，將點擊的答案存進array裡
  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);

  // 處理使用者沒有在時限內點擊答案
  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
