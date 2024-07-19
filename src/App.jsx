import "./App.css";
import { Layout, theme } from "antd";
import { useState } from "react";
import MenuSection from "./components/MenuSection";
import HeaderSection from "./components/HeaderSection";
import StatusSection from "./components/StatusSection";
import ReviewSection from "./components/ReviewSection";
const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <MenuSection collapsed={collapsed} />
      </Sider>
      <Layout
        style={{
          marginLeft: collapsed ? 80 : 200, // Adjust margin based on collapsed state
          transition: "margin-left 0.2s ease", // Add a transition for smooth effect
        }}
      >
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            borderRadius: 50,
          }}
        >
          <HeaderSection />
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
          }}
        >
          <div
            style={{
              padding: 24,
              textAlign: "center",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <StatusSection />
            <ReviewSection />
          </div>
        </Content>
        <Footer
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            textAlign: "center",
            padding: "10px 0",
          }}
        >
          Dashboard Mini Project ©{new Date().getFullYear()} Created by
          AmirMahdi
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
