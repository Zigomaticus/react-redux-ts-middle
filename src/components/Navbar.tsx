// Libraries
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// Hooks
import { useTypedSelector } from "../hooks/useTypedSelector";
// Ant
import { Layout, Menu, Row } from "antd";
//Reducers
import { AuthActionCreators } from "../store/reducers/auth/action-creators";

const { Header } = Layout;

const Navbar: FC = () => {
  const navigate = useNavigate();
  const { auth, user } = useTypedSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <Header>
      <Row justify="end">
        {auth ? (
          <>
            <div style={{ color: "white" }}>{user.username}</div>
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


// commit
// commit 2
// commit 3
// commit 4
// commit 5