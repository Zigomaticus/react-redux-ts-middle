import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// Hooks
import { useTypedSelector } from "../hooks/useTypedSelector";
// Auth
import { AuthActionCreators } from "../store/reducers/auth/action-creaters";
// Ant
import { Menu, Row } from "antd";
import { Header } from "antd/lib/layout/layout";

const Navbar: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useTypedSelector((state) => state.auth.isAuth);

  return (
    <Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div style={{ color: "white" }}>Denis</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item
                onClick={() => dispatch(AuthActionCreators.logout())}
                key={1}
              >
                Выйти
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item onClick={() => navigate("/login")} key={2}>
              Login
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Header>
  );
};

export default Navbar;
