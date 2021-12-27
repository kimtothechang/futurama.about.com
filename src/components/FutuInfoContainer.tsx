import styled from "@emotion/styled";
import { Error, Loading, FuturamaInfoCard } from ".";
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
      <div>
        {data.map((futuinfoData: FutuInfo) => {
          return (
            <FuturamaInfoCard
              key={`${name}-beer-list-${futuinfoData.id}`}
              futuramaData={futuinfoData}
            />
          );
        })}
      </div>
    </div>
  );
};
