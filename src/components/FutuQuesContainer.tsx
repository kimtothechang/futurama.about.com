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
        <QuesWrapper>
          {data.map((futuCastData: FutuQues) => {
            return (
              <FutuQuesCard key={`about-${name}`} futuramaData={futuCastData} />
            );
          })}
        </QuesWrapper>
      </div>
    </div>
  );
};

const QuesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5em;
  margin-bottom: 100px;
`;
