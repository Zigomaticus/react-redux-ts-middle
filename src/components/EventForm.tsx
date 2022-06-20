import React, { FC, PropsWithChildren } from "react";
// Antd
import { Button, DatePicker, Form, Input, Row, Select } from "antd";
// utils
import { rules } from "../utils/rules";
// Models
import { IUser } from "../models/IUser";

interface EventFormProps {
  guests: IUser[];
}

const EventForm: FC<EventFormProps> = (
  props: PropsWithChildren<EventFormProps>
) => {
  return (
    <Form>
      <Form.Item
        label="Описание события"
        name="description"
        rules={[rules.required()]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Дата события" name="date" rules={[rules.required()]}>
        <DatePicker />
      </Form.Item>
      <Form.Item>
        <Select>
          {props.guests.map((guest) => (
            <Select.Option key={guest.username} value={guest.username}>
              {guest.username}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Создать
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default EventForm;
