// Libraries
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
// Ant
import { Layout, Menu, Row } from "antd";
const { Header } = Layout;

const Navbar: FC = () => {
  const navigate = useNavigate();
  const auth = true;

  return (
    <Header>
      <Row justify="end">
        {auth ? (
          <>
            <div style={{ color: "white" }}>Denis</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item onClick={() => console.log("Exit")} key={1}>
                Exit
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item onClick={() => navigate("/")} key={1}>
              Login
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Header>
  );
};

export default Navbar;
