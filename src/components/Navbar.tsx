import { Menu, Row } from "antd";
import { Header } from "antd/lib/layout/layout";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

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
                Выйти
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item onClick={() => navigate("/login")} key={1}>
              Логин
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Header>
  );
};

export default Navbar;
