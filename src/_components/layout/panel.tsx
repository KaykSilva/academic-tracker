import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';

const { Header, Sider, Content } = Layout;

const MainPanel: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{backgroundColor: '#fff'}}>
        <div className="demo-logo-vertical" />
        <img src="https://spinning.fish/fish.gif" alt="" />
        <h1>MR fish rodande</h1>
        <Menu
        
         
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{backgroundColor: 'transparent'}}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Home',
            },
            /* {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            }, */
          ]}
        />
      </Sider>
      <Layout style={{}}>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            backgroundColor: '#F8FAFC',
            borderRadius: borderRadiusLG,
            height: '90vh',
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainPanel;