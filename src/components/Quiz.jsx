import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {
  let content = <Question />;

  if (0) {
    content = <Summary />;
  }
  return <section id="quiz">{content}</section>;
}
