"use client";

import React, { useState } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { SVG_ICONS } from "src/svgicons/SvgIcons";
import { authenticatedRoutesConstant } from "src/routes/routeConstant";

const { Header, Sider, Content } = Layout;
const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();
  return (
    <div className="bg-[#f5f4f7] h-[100vh] flex flex-col justify-between">
      <Layout className="bg-[#f5f4f7]]">
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          className="!bg-[transparent]"
        >
          <div className="demo-logo-vertical" />
          <div className="ml-[2rem] mt-[2rem] mb-[2.5rem]">
            {SVG_ICONS.DashboardLogo}
          </div>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <div className="w-[20px]">{SVG_ICONS.HomeIcon}</div>,
                label: "Dashboard",
              },
              {
                key: "2",
                icon: <div className="w-[20px]">{SVG_ICONS.BookClose}</div>,
                label: "Streams",
                onClick: () => {
                  navigate(authenticatedRoutesConstant.STREAMS);
                },
              },
              {
                key: "3",
                icon: <div className="w-[20px]">{SVG_ICONS.UserIcon}</div>,
                label: "Members",
                onClick: () => {
                  navigate(authenticatedRoutesConstant.MEMBERS);
                },
              },
              {
                key: "4",
                icon: <div className="w-[20px]">{SVG_ICONS.StudentIcon}</div>,
                label: "Students",
                onClick: () => {
                  navigate(authenticatedRoutesConstant.STUDENTS);
                },
              },
            ]}
          />
        </Sider>
        <Layout>
          <Content className="custom-layout-content shadow-lg">
            <Outlet />
          </Content>
        </Layout>
      </Layout>

      <div className="font-inter font-normal text-sm border  border-bgColor2 text-paragraphColor4 px-3 py-5 pl-7 mt-3 flex">
        <p>© ivyonline.co</p>
      </div>
    </div>
  );
};
export default AdminLayout;
