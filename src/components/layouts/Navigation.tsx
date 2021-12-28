import Link from "next/link";
import styled from "@emotion/styled";
import { ROUTES } from "../../constants";

interface ROUTE {
  ID: number;
  PATH: string;
  LABEL: string;
}

export const Navigation = () => {
  return (
    <Header>
      <H1>
        <Link href={`https://futurama-about-com.vercel.app/`}>Futurama</Link>
      </H1>
      <Nav>
        <MenuList>
          {ROUTES.map((routeObject: ROUTE) => {
            return (
              <Li key={`${routeObject.ID}`}>
                <Link href={routeObject.PATH}>
                  <a>{routeObject.LABEL}</a>
                </Link>
              </Li>
            );
          })}
        </MenuList>
      </Nav>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-around;
  background-color: orange;
  color: red;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Menu = styled.div`
  width: 100%;
  height: 100px;
`;

const MenuList = styled.ul`
  display: flex;
`;

const Li = styled.li`
  font-size: 18px;
  font-weight: 600;
  color: red;
  margin: 20px;
  list-style: none;

  &:hover {
    text-shadow: 2px 2px 6px salmon;
`;

const H1 = styled.h1`
  color: red;
  padding-top: 10px;
`;
