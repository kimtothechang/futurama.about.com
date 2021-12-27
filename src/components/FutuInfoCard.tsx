import styled from "@emotion/styled";
import { FutuInfo } from "../types/FutuInfo";

interface FuturamaProps {
  futuramaData: FutuInfo;
}

export const FutuInfoCard = ({ futuramaData }: FuturamaProps) => {
  const { synopsis, yearsAired, creators } = futuramaData;

  return (
    <div>
      <FutuSynopsisRed>Synopsis</FutuSynopsisRed>
      <p>{synopsis}</p>
      <FutuSynopsisBlue>YearsAired</FutuSynopsisBlue>
      <p>{yearsAired}</p>
      <FutuSynopsisGreen>Creators</FutuSynopsisGreen>
      {creators.map(({ name, url }) => {
        return (
          <div key={`about-${name}`}>
            <p>{name}</p>
            <p>{url}</p>
          </div>
        );
      })}
    </div>
  );
};

const FutuSynopsisRed = styled.h3`
  color: red;
  border-top: 1px solid red;
  padding-top: 5px;
`;
const FutuSynopsisBlue = styled.h3`
  color: blue;
  border-top: 1px solid blue;
  padding-top: 5px;
`;
const FutuSynopsisGreen = styled.h3`
  color: green;
  border-top: 1px solid green;
  padding-top: 5px;
`;
