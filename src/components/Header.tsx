import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <NavStyle>
      <LinkStyle to="/">
        <TitleStyle>Otavio Rampinelli</TitleStyle>
      </LinkStyle>
      <ul>
        <ListItemStyle>
          <LinkStyle to="/experiences">Experiences</LinkStyle>
        </ListItemStyle>
      </ul>
    </NavStyle>
  );
};

const NavStyle = styled.nav`
  background: #383838;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const TitleStyle = styled.h1`
  &:hover {
    color: #c9c9c9;
  }
`;

const ListItemStyle = styled.li`
  list-style: none;
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: white;
  &:hover {
    color: #c9c9c9;
  }
`;

export default Header;
