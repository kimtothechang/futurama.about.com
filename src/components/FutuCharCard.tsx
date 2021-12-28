import styled from "@emotion/styled";
import { FutuChar } from "../types/FutuChar";
import Image from "next/image";

interface FuturamaProps {
  futuramaData: FutuChar;
}

export const FutuCharCard = ({ futuramaData }: FuturamaProps) => {
  const { images, name, sayings, age, id } = futuramaData;

  return (
    <div>
      <FutuSynopsisRed>
        <Image src={images.main} alt="" />
      </FutuSynopsisRed>
      <FutuSynopsisBlue>Name</FutuSynopsisBlue>
      <p>{`${name.first} ${name.middle} ${name.last} - ${age}`}</p>
      <FutuSynopsisGreen>Sayings</FutuSynopsisGreen>
      {sayings.map((saying) => {
        return (
          <div key={`about-${name}-${id}`}>
            <p>- {saying}</p>
          </div>
        );
      })}
    </div>
  );
};

const FutuSynopsisRed = styled.h3`
  color: red;
  border-top: 1px solid red;
  padding-top: 5px;
`;
const FutuSynopsisBlue = styled.h3`
  color: blue;
  border-top: 1px solid blue;
  padding-top: 5px;
`;
const FutuSynopsisGreen = styled.h3`
  color: green;
  border-top: 1px solid green;
  padding-top: 5px;
`;
