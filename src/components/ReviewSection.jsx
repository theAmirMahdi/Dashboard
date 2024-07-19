import { LaptopOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, Flex, Progress } from "antd";
import styled from "styled-components";
import ColumnChart from "./ColumnChart.jsx";

const Container = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SalesChart = styled.div`
  width: 75%;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SalesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TrafficChart = styled.div`
  width: 25%;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 20px 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const UsageDeviceTitle = styled.div`
  display: flex;

  h5 {
    margin-left: 10px;
  }

  svg {
    width: 25px;
    height: 25px;
  }
`;

const ProgressWrapper = styled.div`
  margin: 5px 10px;
`;

function ReviewSection() {
  return (
    <Container>
      <SalesChart>
        <SalesHeader>
          <h3>Sales</h3>
          <Button type="text">
            <ReloadOutlined /> sync
          </Button>
        </SalesHeader>
        <ColumnChart />
      </SalesChart>
      <TrafficChart>
        <h3>Traffic Source</h3>
        <Flex
          vertical
          gap="small"
          style={{
            width: "100%",
          }}
        >
          <ProgressWrapper>
            <UsageDeviceTitle>
              <LaptopOutlined />
              <h5>Desktop</h5>
            </UsageDeviceTitle>
            <Progress
              percent={63}
              size="small"
              status="active"
              strokeColor="#6366F1"
            />
          </ProgressWrapper>
          <ProgressWrapper>
            <UsageDeviceTitle>
              <LaptopOutlined />
              <h5>Tablet</h5>
            </UsageDeviceTitle>
            <Progress
              percent={15}
              size="small"
              status="active"
              strokeColor="#11B981"
            />
          </ProgressWrapper>
          <ProgressWrapper>
            <UsageDeviceTitle>
              <LaptopOutlined />
              <h5>Mobile</h5>
            </UsageDeviceTitle>
            <Progress
              percent={22}
              size="small"
              status="active"
              strokeColor="#F79007"
            />
          </ProgressWrapper>
        </Flex>
      </TrafficChart>
    </Container>
  );
}

export default ReviewSection;
