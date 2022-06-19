import React, { FC } from "react";
import { useDispatch } from "react-redux";
// Utils
import { rules } from "../utils/rules";
// Auth
import { AuthActionCreators } from "../store/reducers/auth/action-creaters";
// Antd
import { Button, Form, Input } from "antd";

const LoginForm: FC = () => {
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(AuthActionCreators.login("user", "123"));
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
