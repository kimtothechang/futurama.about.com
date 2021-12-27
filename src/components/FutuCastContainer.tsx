import styled from "@emotion/styled";
import { Error, Loading, FutuCastCard } from ".";
import { useFutuData } from "../hooks/useFutuData";
import { FutuCast } from "../types/FutuCast";

interface FuturamaContainerProps {
  name: string;
}

export const FutuCastContainer = ({ name }: FuturamaContainerProps) => {
  const { data, error } = useFutuData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>Futurama {name}</h1>
      <div>
        {data.map((futuCastData: FutuCast) => {
          return (
            <FutuCastCard key={`about-${name}`} futuramaData={futuCastData} />
          );
        })}
      </div>
    </div>
  );
};
