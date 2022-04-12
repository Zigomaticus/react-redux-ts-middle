// Libraries
import { Button, Form } from "antd";
import Input from "rc-input";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
// Store
import { AuthActionCreators } from "../store/reducers/auth/action-creators";
// utils
import { rules } from "../utils/rules";

const LoginForm: FC = () => {
  const dispatch = useDispatch();
  const { error, isLoading } = useTypedSelector((state) => state.auth);

  const submit = () => {
    dispatch(AuthActionCreators.login("user", "123"));
  };

  return (
    <Form onFinish={submit}>
      {error && <div style={{ color: "red" }}>{error}</div>}
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
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
