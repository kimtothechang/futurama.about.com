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
        {data.map((futuInvenData: FutuInven) => {
          return (
            <FutuInvenCard key={`about-${name}`} futuramaData={futuInvenData} />
          );
        })}
      </div>
    </div>
  );
};
