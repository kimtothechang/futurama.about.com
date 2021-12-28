import styled from "@emotion/styled";
import { Error, Loading, FutuCharCard } from ".";
import { useFutuData } from "../hooks/useFutuData";
import { FutuChar } from "../types/FutuChar";

interface FuturamaContainerProps {
  name: string;
}

export const FutuCharContainer = ({ name }: FuturamaContainerProps) => {
  const { data, error } = useFutuData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>Futurama {name}</h1>
      <div>
        <CharWrapper>
          {data.map((futuCharData: FutuChar) => {
            return (
              <FutuCharCard key={`about-${name}`} futuramaData={futuCharData} />
            );
          })}
        </CharWrapper>
      </div>
    </div>
  );
};

const CharWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5em;
  margin-bottom: 100px;
`;
