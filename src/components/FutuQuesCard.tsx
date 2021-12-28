import styled from "@emotion/styled";
import { FutuQues } from "../types/FutuQues";

interface FuturamaProps {
  futuramaData: FutuQues;
}

export const FutuQuesCard = ({ futuramaData }: FuturamaProps) => {
  const { id, question, possibleAnswers, correctAnswer } = futuramaData;

  return (
    <div>
      <CardWrapper>
        <FutuSynopsisRed>
          {id}. {question}
        </FutuSynopsisRed>
        <div>
          {possibleAnswers.map((pos, index) => {
            return (
              <p key={`about-answers-${id}`}>
                {" "}
                {index + 1}) {pos}
              </p>
            );
          })}
        </div>
        <p>* if u wanna answer, hover this green bar</p>
        <CheckAnswer>A. {correctAnswer}</CheckAnswer>
      </CardWrapper>
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

const CardWrapper = styled.div`
  box-shadow: 5px 5px 5px gray;
  padding: 0.5em;
  height: 400px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

// https://futurama-about-com.vercel.app/futurama/info
// https://futurama-about-com.vercel.app/futurama/episodes
// https://futurama-about-com.vercel.app/futurama/questions
// https://futurama-about-com.vercel.app/futurama/inventory

// https://futurama-about-com.vercel.app/futurama/characters
// https://futurama-about-com.vercel.app/futurama/ast
