import styled from "@emotion/styled";
import { FutuInfo } from "../types/FutuInfo";

interface FuturamaProps {
  futuramaData: FutuInfo;
}

export const FutuInfoCard = ({ futuramaData }: FuturamaProps) => {
  const { synopsis, yearsAired, creators } = futuramaData;

  return (
    <div>
      <InfoWrapper>
        <SynopsisWrapper>
          <FutuSynopsisRed>Synopsis</FutuSynopsisRed>
          <p>{synopsis}</p>
        </SynopsisWrapper>
        <div>
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
      </InfoWrapper>
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

const InfoWrapper = styled.div`
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1em;
  box-shadow: 5px 5px 5px gray;
`;

const SynopsisWrapper = styled.div`
  width: 50vw;
`;
