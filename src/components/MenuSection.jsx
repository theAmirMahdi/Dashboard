/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { Card, Menu } from "antd";
import {
  LockOutlined,
  BarChartOutlined,
  SettingOutlined,
  BugOutlined,
  TeamOutlined,
  ShoppingOutlined,
  UserOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

// Define styled components
const StyledCard = styled(Card)`
  background: #252e3e;
  width: 160px;
  height: 60px;

  .ant-card-head {
    min-height: 30px;
    color: #fff;
    padding: 0 0 0 3px;
    border-bottom: none;
  }

  .ant-card-body {
    padding: 3px;
    color: #fff;
  }
`;

const StyledMenuSection = styled.div`
  .demo-logo-vertical {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    margin: 16px 0;
  }
`;

// Define menu items and card content
const items = [
  { icon: BarChartOutlined, label: "Overview" },
  { icon: TeamOutlined, label: "Customers" },
  { icon: ShoppingOutlined, label: "Companies" },
  { icon: UserOutlined, label: "Account" },
  { icon: SettingOutlined, label: "Settings" },
  { icon: LockOutlined, label: "Login" },
  { icon: UserAddOutlined, label: "Register" },
  { icon: BugOutlined, label: "Error" },
].map((item, index) => ({
  key: String(index + 1),
  icon: React.createElement(item.icon),
  label: item.label,
}));

const cards = [{ name: "AmirMahdi", role: "Frontend" }].map((card, index) => ({
  key: String(index + 1),
  name: card.name,
  role: card.role,
}));

// Define the MenuSection component
function MenuSection({ collapsed }) {
  return (
    <StyledMenuSection>
      <div className="demo-logo-vertical">
        <img src="./public/logo.png" width={40} alt="Logo" />

        {!collapsed && (
          <StyledCard title={cards[0].name} bordered={false}>
            {cards[0].role}
          </StyledCard>
        )}
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </div>
    </StyledMenuSection>
  );
}

export default MenuSection;
