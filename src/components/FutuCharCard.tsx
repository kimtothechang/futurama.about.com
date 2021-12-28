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
      <CardWrapper>
        <FutuSynopsisRed>
          <Img src={images.main} alt="" />
        </FutuSynopsisRed>
        <FutuSynopsisBlue>Name</FutuSynopsisBlue>
        <p>{`${name.first} ${name.middle} ${name.last} - ${age}`}</p>
        <FutuSynopsisGreen>Sayings</FutuSynopsisGreen>
        {sayings.map((saying, index) => {
          if (index < 5) {
            return (
              <div key={`about-${name}-${id}`}>
                <p>- {saying}</p>
              </div>
            );
          }
        })}
      </CardWrapper>
    </div>
  );
};

const FutuSynopsisRed = styled.h3`
  color: red;
  padding-top: 5px;
`;
const FutuSynopsisBlue = styled.h3`
  color: blue;
  padding-top: 5px;
`;
const FutuSynopsisGreen = styled.h3`
  color: green;
  padding-top: 5px;
`;

const Img = styled.img`
  width: 200px;
  height: 300px;
`;

const CardWrapper = styled.div`
  box-shadow: 5px 5px 5px gray;
  padding: 0.5em;
  height: 740px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
