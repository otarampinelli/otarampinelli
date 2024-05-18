import Wrapper from "./Wrapper";
import experiencesList from "../data/experiences.json";
import Experience from "./Experience";
import styled from "styled-components";

const ExperiencesList = () => {
  const { experiences } = experiencesList;
  return (
    <Wrapper>
      <StyledExperiences>
        {experiences &&
          experiences.map((experience) => {
            return <Experience experience={experience} />;
          })}
      </StyledExperiences>
    </Wrapper>
  );
};

const StyledExperiences = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default ExperiencesList;
