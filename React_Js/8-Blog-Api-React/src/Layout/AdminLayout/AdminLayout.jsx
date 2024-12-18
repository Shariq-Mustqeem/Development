import React, { memo, useState } from "react";
import {
  UserOutlined,
  LineChartOutlined,
  AlignCenterOutlined,
  BookOutlined,
  CommentOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Link, Outlet } from "react-router-dom";
import {
  AUTHENTICATED_ROUTES,
  UNAUTHENTICATED_ROUTES,
} from "../../utils/constants";
import { AuthService } from "../../utils/auth.service";

const { Content, Sider } = Layout;
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
        <div className="demo-logo-vertical" style={{ marginTop: 70 }} />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Content
          style={{
            padding: 26,
          }}
        >
          <div
            style={{
              padding: 26,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              overflowX: "auto",
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default memo(AdminLayout);
