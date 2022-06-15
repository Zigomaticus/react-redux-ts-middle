import React, { FC } from "react";
// Utils
import { rules } from "../utils/rules";
// Antd
import { Button, Form, Input } from "antd";

const LoginForm: FC = () => {
  const submit = () => {
    console.log("submit");
  };

  return (
    <Form onFinish={submit}>
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required("Please input your username!")]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required("Please input your password!")]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
