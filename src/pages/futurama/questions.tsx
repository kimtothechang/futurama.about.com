import type { NextPage } from "next";
import { FutuQuesContainer } from "../../components/FutuQuesContainer";

const QuestionPage: NextPage = () => {
  const name = "questions";

  return (
    <div>
      <FutuQuesContainer name={name} />
    </div>
  );
};

export default QuestionPage;
