import React from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import { Typography, Layout, Menu, Avatar } from "antd";
import "antd/dist/antd.css";
import { MenuItem } from "rc-menu";
import { UserOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;
function App() {

  

  return (
    <div>
      <Layout style={{ margin: "20" }}>
        <Header style={{ padding: "15" }}>
          <Avatar style={{ float: "right" }} icon={<UserOutlined />} />
          <Title style={{ color: "#fff" }} level={3}>
            Header
          </Title>
        </Header>
        <Layout>
          <Sider style={{ backgroundColor: "#fff", marginLeft: 50 }}>
            <h2 style={{ textAlign: "center" }}> Blog.</h2>
            <Menu mode="inline">
              <MenuItem key="LoginAccaunt">
               login Accaunt <NavLink to="/login"></NavLink>
              </MenuItem>

              <MenuItem key="CreateForm">
                Create Accaunt
                <NavLink to="/post-form"></NavLink>
              </MenuItem>
              <MenuItem key="readlist">
                Users Info
                <NavLink to="/post-list"></NavLink>
              </MenuItem>
              <MenuItem key="sendmassege">
                Send Massege
                <NavLink to="/send-massege"></NavLink>
              </MenuItem>
             
              
            </Menu>
           
          </Sider>
          <Content style={{ padding: "0 50px" }}>
            <Outlet />
          </Content>
        </Layout>
        <Footer style={{ textAlign: "center" }}>
          Ant Design Layout Created by Ant UED
        </Footer>

       
      </Layout>
    

    </div>
  );
}
export default App;
