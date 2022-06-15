import React, { FC } from "react";
// Components
import LoginForm from "../components/LoginForm";
// Ant
import { Layout, Row } from "antd";
// Css
import "../App.css";

const Login: FC = () => {
  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <LoginForm />
      </Row>
    </Layout>
  );
};

export default Login;
