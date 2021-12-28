import styled from "@emotion/styled";
import { FutuEpi } from "../types/FutuEpi";

interface FuturamaProps {
  futuramaData: FutuEpi;
}

export const FutuEpiCard = ({ futuramaData }: FuturamaProps) => {
  const { number, title, writers, desc } = futuramaData;

  return (
    <div>
      <CardWrapper>
        <FutuSynopsisRed>
          {title} - {number}
        </FutuSynopsisRed>
        <FutuSynopsisBlue>writers</FutuSynopsisBlue>
        <p>{writers}</p>
        <FutuSynopsisGreen>Desc</FutuSynopsisGreen>
        <p>{desc}</p>
      </CardWrapper>
    </div>
  );
};

const FutuSynopsisRed = styled.h3`
  color: red;
  padding-top: 5px;
`;
const FutuSynopsisBlue = styled.h3`
  color: blue;
  padding-top: 5px;
`;
const FutuSynopsisGreen = styled.h3`
  color: green;
  padding-top: 5px;
`;

const CardWrapper = styled.div`
  border: 1px solid black;
  box-shadow: 5px 5px 5px gray;
  padding: 0.5em;
  height: 400px;
`;
