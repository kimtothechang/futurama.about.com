import styled from "@emotion/styled";
import { FutuCast } from "../types/FutuCast";

interface FuturamaProps {
  futuramaData: FutuCast;
}

export const FutuCastCard = ({ futuramaData }: FuturamaProps) => {
  const { name, born, bio } = futuramaData;

  return (
    <div>
      <FutuSynopsisRed>Name</FutuSynopsisRed>
      <p>{name}</p>
      <FutuSynopsisBlue>Born</FutuSynopsisBlue>
      <p>{born}</p>
      <FutuSynopsisGreen>
        <a href={bio.url}>More Detail Link</a>
      </FutuSynopsisGreen>
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
