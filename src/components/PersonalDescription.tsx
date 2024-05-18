import styled from "styled-components";
import infos from "../data/infos.json";
import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";

const PersonalDescription = () => {
  return (
    <Wrapper>
      <>
        <StyledImageContainer>
          <StyledImage src="/images/city.jpg" alt="View from my balcony" />
          <span>view from my balcony</span>
        </StyledImageContainer>
        <StyledInfos>
          <h1>About Me!</h1>
          <div>{infos.title}</div>
          <div>
            {infos.findMe} (
            <Link to="https://www.linkedin.com/in/otarampinelli/">
              linkedin
            </Link>
            , <Link to="https://github.com/otarampinelli">github</Link>)
          </div>
          <ul>
            {Object.values(infos.about).map((info) => {
              return <li>{info}</li>;
            })}
          </ul>
        </StyledInfos>
      </>
    </Wrapper>
  );
};

const StyledInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledImageContainer = styled.div`
  padding: 10px;
  text-align: center;
`;

const StyledImage = styled.img`
  width: 100%;
`;

export default PersonalDescription;
