import React, { memo, useState } from "react";
import {
  UserOutlined,
  LineChartOutlined,
  AlignCenterOutlined,
  BookOutlined,
  CommentOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AuthService } from "../../../utils/auth.service";
import {
  AUTHENTICATED_ROUTES,
  UNAUTHENTICATED_ROUTES,
} from "../../../utils/constant";
const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    key: 1,
    icon: <UserOutlined />,
    label: <Link to={AUTHENTICATED_ROUTES.DASHBOARD}>Dashboard</Link>,
  },
  {
    key: 2,
    icon: <AlignCenterOutlined />,
    label: <Link to={AUTHENTICATED_ROUTES.CATEGORIES}>Categories</Link>,
  },
  {
    key: 3,
    icon: <LineChartOutlined />,
    label: <Link to={AUTHENTICATED_ROUTES.USERS}>Users</Link>,
  },
  {
    key: 4,
    icon: <BookOutlined />,
    label: <Link to={AUTHENTICATED_ROUTES.POSTS}>Posts</Link>,
  },
  {
    key: 5,
    icon: <CommentOutlined />,
    label: <Link to={AUTHENTICATED_ROUTES.COMMENTS}>Comments</Link>,
  },
  {
    key: 6,
    icon: <LogoutOutlined />,
    label: (
      <div
        onClick={() => {
          AuthService.removeToken();
          window.location.href = UNAUTHENTICATED_ROUTES.LOGIN;
        }}
      >
        Logout
      </div>
    ),
  },
];
const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" style={{ marginTop: 40 }} />
        <Button
          type="primary"
          style={{ width: "80%", marginLeft: "20px", marginBottom: "20px" }}
          onClick={() => {
            return navigate(UNAUTHENTICATED_ROUTES.HOME);
          }}
        >
          Home
        </Button>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default memo(AdminLayout);
