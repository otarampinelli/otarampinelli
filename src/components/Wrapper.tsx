import styled from "styled-components";
import { ContentType } from "../types/common";

const Wrapper = ({ children }: ContentType) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

const StyledWrapper = styled.div`
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  padding-right: 10px;
  padding-left: 10px;
`;

export default Wrapper;
