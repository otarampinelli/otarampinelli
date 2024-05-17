import styled from "styled-components";
import { ContentType } from "../types/common";

const Content = ({ children }: ContentType) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};

const ContainerStyle = styled.div`
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  padding-right: 10px;
  padding-left: 10px;
`;

export default Content;
