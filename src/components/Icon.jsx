/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledIcon = styled.span`
  font-size: 5em;
`;

const Icon = ({ icon: IconComponent, color }) => (
  <StyledIcon>
    <IconComponent style={{ color }} />
  </StyledIcon>
);

export default Icon;
