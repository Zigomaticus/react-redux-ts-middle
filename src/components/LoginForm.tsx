// Libraries
import { Button, Form } from "antd";
import Input from "rc-input";
import React, { FC } from "react";
// utils
import { rules } from "../utils/rules";

const LoginForm: FC = () => {
  return (
    <Form>
      <Form.Item
        label="Имя пользователя"
        name="username"
        rules={[rules.required("Пожалуйста введите ваше пользователя")]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[rules.required("Пожалуйста введите пароль")]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
