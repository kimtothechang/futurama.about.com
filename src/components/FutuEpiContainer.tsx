import styled from "@emotion/styled";
import { Error, Loading, FutuEpiCard } from ".";
import { useFutuData } from "../hooks/useFutuData";
import { FutuEpi } from "../types/FutuEpi";

interface FuturamaContainerProps {
  name: string;
}

export const FutuEpiContainer = ({ name }: FuturamaContainerProps) => {
  const { data, error } = useFutuData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>Futurama {name}</h1>
      <div>
        <CharWrapper>
          {data.map((futuCastData: FutuEpi) => {
            return (
              <FutuEpiCard key={`about-${name}`} futuramaData={futuCastData} />
            );
          })}
        </CharWrapper>
      </div>
    </div>
  );
};

const CharWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1em;
`;
