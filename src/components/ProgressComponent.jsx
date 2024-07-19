/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Progress } from "antd";

const StyledProgress = styled.div`
  margin-top: auto;
  font-size: 1em;
  font-weight: bold;
`;

const StyledBanner = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  margin-top: auto;
`;

const BannerText = styled.span`
  color: #b5b9bf;
  margin-left: 10px;
`;

const ProgressComponent = ({ progress, title }) => {
  const renderProgress = (progress) => {
    if (typeof progress === "object" && progress.icon) {
      return (
        <StyledBanner>
          <progress.icon style={{ color: getTitleColor(title) }} />
          <span style={{ color: getTitleColor(title), fontSize: "16px" }}>
            12%
          </span>
          <BannerText>{progress.text}</BannerText>
        </StyledBanner>
      );
    } else {
      return progress;
    }
  };

  return <StyledProgress>{renderProgress(progress)}</StyledProgress>;
};

function getTitleColor(title) {
  switch (title) {
    case "BUDGET":
      return "#f04337";
    case "TOTAL CUSTOMERS":
      return "#11b981";
    case "TASK PROGRESS":
      return "#f79007";
    case "TOTAL PROFIT":
      return "#f04337";
    default:
      return "#000";
  }
}

export default ProgressComponent;
