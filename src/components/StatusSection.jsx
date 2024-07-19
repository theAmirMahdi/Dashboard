import styled from "styled-components";
import Box from "./Box";
import {
  DollarOutlined,
  TableOutlined,
  UnorderedListOutlined,
  ArrowDownOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
import { Progress } from "antd";

const data = [
  {
    key: "1",
    title: "BUDGET",
    progress: { icon: ArrowUpOutlined, text: "Since last month" },
    icon: DollarOutlined,
  },
  {
    key: "2",
    title: "TOTAL CUSTOMERS",
    progress: { icon: ArrowDownOutlined, text: "Since last month" },
    icon: TableOutlined,
  },
  {
    key: "3",
    title: "TASK PROGRESS",
    progress: <Progress percent={75.5} />, // Store the Progress component as JSX
    icon: UnorderedListOutlined,
  },
  {
    key: "4",
    title: "TOTAL PROFIT",
    progress: { icon: ArrowUpOutlined, text: "Since last month" },
    icon: DollarOutlined,
  },
];

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const StatusSection = () => {
  return (
    <Container>
      {data.map((item) => (
        <Box
          key={item.key}
          title={item.title}
          progress={item.progress}
          icon={item.icon}
        />
      ))}
    </Container>
  );
};

export default StatusSection;
