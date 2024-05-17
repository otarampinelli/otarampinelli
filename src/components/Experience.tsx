import styled from "styled-components";
import { ExperienceType } from "../types/experience";

const Experience = ({ experience }: ExperienceType) => {
  return (
    <ExperienceStyle>
      <TitleStyle>{experience.title}</TitleStyle>
      <h3>{experience.company}</h3>
      <div>{experience.period}</div>
      <div>{experience.description}</div>
    </ExperienceStyle>
  );
};

const ExperienceStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-bottom: 10px;
  border-bottom: 2px solid;
  border-image: linear-gradient(rgb(77, 171, 247), rgb(6, 129, 230)) 30;
`;

const TitleStyle = styled.h1`
  color: rgb(77, 171, 247);
`;

export default Experience;
