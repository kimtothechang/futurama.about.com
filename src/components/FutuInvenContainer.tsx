import styled from "@emotion/styled";
import { Error, Loading, FutuInvenCard } from ".";
import { useFutuData } from "../hooks/useFutuData";
import { FutuInven } from "../types/FutuInven";

interface FuturamaContainerProps {
  name: string;
}

export const FutuInvenContainer = ({ name }: FuturamaContainerProps) => {
  const { data, error } = useFutuData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>Futurama {name}</h1>
      <div>
        <InvenWrapper>
          {data.map((futuInvenData: FutuInven) => {
            return (
              <FutuInvenCard
                key={`about-${name}`}
                futuramaData={futuInvenData}
              />
            );
          })}
        </InvenWrapper>
      </div>
    </div>
  );
};

const InvenWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5em;
  margin-bottom: 100px;
`;
