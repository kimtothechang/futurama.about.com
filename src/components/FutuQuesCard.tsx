import styled from "@emotion/styled";
import { FutuQues } from "../types/FutuQues";

interface FuturamaProps {
  futuramaData: FutuQues;
}

export const FutuQuesCard = ({ futuramaData }: FuturamaProps) => {
  const { id, question, possibleAnswers, correctAnswer } = futuramaData;

  return (
    <div>
      <FutuQuesBorder>
        <FutuSynopsisRed>
          {id}. {question}
        </FutuSynopsisRed>
        <div key={`about-${id}-answers`}>
          {possibleAnswers.map((pos, index) => {
            return (
              <p>
                {" "}
                {index + 1}) {pos}
              </p>
            );
          })}
        </div>
        <p>* if u wanna answer, hover this green bar</p>
        <CheckAnswer>A. {correctAnswer}</CheckAnswer>
      </FutuQuesBorder>
    </div>
  );
};

const FutuSynopsisRed = styled.h3`
  color: red;
  border-top: 1px solid bolack;
  padding-top: 5px;
`;

const CheckAnswer = styled.p`
  background-color: green;
  color: green;
  padding-top: 5px;
  cursor: pointer;
  display: inline-block;

  &: hover {
    background-color: white;
  }
`;

const FutuQuesBorder = styled.div`
  border: 1px solid black;
`;
