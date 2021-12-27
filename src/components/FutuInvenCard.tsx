import styled from "@emotion/styled";
import { FutuInven } from "../types/FutuInven";

interface FuturamaProps {
  futuramaData: FutuInven;
}

export const FutuInvenCard = ({ futuramaData }: FuturamaProps) => {
  const { title, category, description, price, stock, id } = futuramaData;

  return (
    <div>
      <FutuSynopsisRed>
        {category} - {title}
      </FutuSynopsisRed>
      <p>price: {price}</p>
      <p>stock: {stock}</p>
      <div key={`about-${id}-inventory`}>desc: {description}</div>
    </div>
  );
};

const FutuSynopsisRed = styled.h3`
  color: red;
  border-top: 1px solid bolack;
  padding-top: 5px;
`;
