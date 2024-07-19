/* eslint-disable react/prop-types */
import styled from "styled-components";
import Title from "./Title";
import Icon from "./Icon";
import ProgressComponent from "./ProgressComponent";

const BoxWrapper = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 20px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  @media (min-width: 768px) {
    width: calc(50% - 10px);
  }

  @media (min-width: 992px) {
    width: calc(25% - 10px);
  }

  .box-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Box = ({ title, progress, icon }) => {
  const color = getTitleColor(title);

  return (
    <BoxWrapper>
      <div className="box-header">
        <Title>{title}</Title>
        <Icon icon={icon} color={color} />
      </div>
      <ProgressComponent progress={progress} title={title} />
    </BoxWrapper>
  );
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

export default Box;
