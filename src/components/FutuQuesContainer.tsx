import styled from "@emotion/styled";
import { Error, Loading, FutuQuesCard } from ".";
import { useFutuData } from "../hooks/useFutuData";
import { FutuQues } from "../types/FutuQues";

interface FuturamaContainerProps {
  name: string;
}

export const FutuQuesContainer = ({ name }: FuturamaContainerProps) => {
  const { data, error } = useFutuData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>Futurama {name}</h1>
      <div>
        <FutuQuesWrapper>
          {data.map((futuCastData: FutuQues) => {
            return (
              <FutuQuesCard key={`about-${name}`} futuramaData={futuCastData} />
            );
          })}
        </FutuQuesWrapper>
      </div>
    </div>
  );
};

const FutuQuesWrapper = styled.div`
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: dense;
`;
