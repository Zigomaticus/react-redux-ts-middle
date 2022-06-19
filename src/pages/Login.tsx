import React, { FC } from "react";
// Components
import LoginForm from "../components/LoginForm";
// Ant
import { Card, Layout, Row } from "antd";
// Css
import "../App.css";

const Login: FC = () => {
  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <Card>
          <LoginForm />
        </Card>
      </Row>
    </Layout>
  );
};

export default Login;
