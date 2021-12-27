import styled from "@emotion/styled";
import { FutuEpi } from "../types/FutuEpi";

interface FuturamaProps {
  futuramaData: FutuEpi;
}

export const FutuEpiCard = ({ futuramaData }: FuturamaProps) => {
  const { number, title, writers, desc } = futuramaData;

  return (
    <div>
      <FutuSynopsisRed>
        {title} - {number}
      </FutuSynopsisRed>
      <FutuSynopsisBlue>writers</FutuSynopsisBlue>
      <p>{writers}</p>
      <FutuSynopsisGreen>Desc</FutuSynopsisGreen>
      <p>{desc}</p>
    </div>
  );
};

const FutuSynopsisRed = styled.h3`
  color: red;
  border-top: 1px solid black;
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
