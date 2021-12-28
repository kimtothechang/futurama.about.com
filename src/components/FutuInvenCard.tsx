import styled from "@emotion/styled";
import { FutuInven } from "../types/FutuInven";

interface FuturamaProps {
  futuramaData: FutuInven;
}

export const FutuInvenCard = ({ futuramaData }: FuturamaProps) => {
  const { title, category, description, price, stock, id } = futuramaData;

  return (
    <div>
      <CardWrapper>
        <FutuSynopsisRed>
          {category} - {title}
        </FutuSynopsisRed>
        <p>price: {price}</p>
        <p>stock: {stock}</p>
        <div key={`about-${id}-inventory`}>desc: {description}</div>
      </CardWrapper>
    </div>
  );
};

const FutuSynopsisRed = styled.h3`
  color: red;
  border-top: 1px solid bolack;
  padding-top: 5px;
`;

const CardWrapper = styled.div`
  box-shadow: 5px 5px 5px gray;
  padding: 0.5em;
  height: 300px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
