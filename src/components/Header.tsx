import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledNav>
      <StyledLink to="/">
        <StyledTitle>Otavio Rampinelli</StyledTitle>
      </StyledLink>
      <ul>
        <StyledListItem>
          <StyledLink to="/experiences">Experiences</StyledLink>
        </StyledListItem>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  background: #383838;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const StyledTitle = styled.h1`
  &:hover {
    color: #c9c9c9;
  }
`;

const StyledListItem = styled.li`
  list-style: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  &:hover {
    color: #c9c9c9;
  }
`;

export default Header;
