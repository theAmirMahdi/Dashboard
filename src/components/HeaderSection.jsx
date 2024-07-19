import {
  NotificationOutlined,
  SearchOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Badge, Menu, Space } from "antd";
import styled from "styled-components";

const MenuSection = styled(Menu)`
  flex-direction: row-reverse;
  border-radius: 5px;
`;

const BadgeComponent = styled(Badge)`
  .ant-badge-count {
    height: 10px;
    min-width: 10px;
    line-height: 9px;
    font-size: 8px;
  }
`;
const items = [
  {
    key: "1",
    label: (
      <span>
        <img
          src="./public/profile.jpg"
          width={20}
          style={{ borderRadius: 50 }}
        />
      </span>
    ),
  },
  {
    key: "2",
    icon: (
      <Space size="middle">
        <BadgeComponent size="default" count={5} showZero offset={[6]}>
          <NotificationOutlined />
        </BadgeComponent>
      </Space>
    ),
  },
  {
    key: "3",
    icon: <TeamOutlined />,
  },
  {
    key: "4",
    label: <SearchOutlined />,
    style: { marginRight: "auto" },
  },
];

function HeaderSection() {
  return (
    <MenuSection mode="horizontal" defaultSelectedKeys={["1"]} items={items} />
  );
}

export default HeaderSection;
