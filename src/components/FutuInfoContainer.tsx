import styled from "@emotion/styled";
import { Error, Loading, FutuInfoCard } from ".";
import { useFutuData } from "../hooks/useFutuData";
import { FutuInfo } from "../types/FutuInfo";

interface FuturamaContainerProps {
  name: string;
}

export const FutuInfoContainer = ({ name }: FuturamaContainerProps) => {
  const { data, error } = useFutuData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>Futurama {name}</h1>
      <CharacterContainer>
        {data.map((futuinfoData: FutuInfo) => {
          return (
            <FutuInfoCard
              key={`${name}-list-${futuinfoData.id}`}
              futuramaData={futuinfoData}
            />
          );
        })}
      </CharacterContainer>
    </div>
  );
};

const CharacterContainer = styled.div`
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(2, 1fr);
`;
