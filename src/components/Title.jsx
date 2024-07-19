/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledTitle = styled.div`
  font-size: 0.85em;
  margin-bottom: 10px;
`;

const Title = ({ children }) => <StyledTitle>{children}</StyledTitle>;

export default Title;
