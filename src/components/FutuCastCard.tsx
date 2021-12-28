import styled from "@emotion/styled";
import { FutuCast } from "../types/FutuCast";

interface FuturamaProps {
  futuramaData: FutuCast;
}

export const FutuCastCard = ({ futuramaData }: FuturamaProps) => {
  const { name, born, bio } = futuramaData;

  return (
    <div>
      <CardWrapper>
        <FutuSynopsisRed>Name</FutuSynopsisRed>
        <p>{name}</p>
        <FutuSynopsisBlue>Born</FutuSynopsisBlue>
        <p>{born}</p>
        <FutuSynopsisGreen>
          <a href={bio.url}>More Detail Link</a>
        </FutuSynopsisGreen>
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
  box-shadow: 5px 5px 5px gray;
  padding: 0.5em;
  height: 300px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
