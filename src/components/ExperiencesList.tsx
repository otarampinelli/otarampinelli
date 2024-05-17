import Content from "./Content";
import experiencesList from "../data/experiences.json";
import Experience from "./Experience";
import styled from "styled-components";

const ExperiencesList = () => {
  const { experiences } = experiencesList;
  return (
    <Content>
      <ExperiencesListStyle>
        {experiences &&
          experiences.map((experience) => {
            return <Experience experience={experience} />;
          })}
      </ExperiencesListStyle>
    </Content>
  );
};

const ExperiencesListStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default ExperiencesList;
