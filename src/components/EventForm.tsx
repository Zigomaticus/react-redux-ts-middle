import React, { FC, PropsWithChildren, useState } from "react";
// Antd
import { Button, DatePicker, Form, Input, Row, Select } from "antd";
import { Moment } from "moment";
// utils
import { rules } from "../utils/rules";
// Utils
import { formDate } from "../utils/date";
// Hooks
import { useTypedSelector } from "../hooks/useTypedSelector";
// Models
import { IUser } from "../models/IUser";
import { IEvent } from "../models/IEvent";

interface EventFormProps {
  guests: IUser[];
  submit: (event: IEvent) => void;
}

const EventForm: FC<EventFormProps> = (
  props: PropsWithChildren<EventFormProps>
) => {
  const [event, setEvent] = useState<IEvent>({
    author: "",
    date: "",
    discription: "",
    guest: "",
  });
  const { user } = useTypedSelector((state) => state.auth);

  const selectDate = (date: Moment | null) => {
    if (date) {
      setEvent({ ...event, date: formDate(date.toDate()) });
    }
  };

  const submitForm = () => {
    props.submit({ ...event, author: user.username });
  };

  return (
    <Form onFinish={submitForm}>
      <Form.Item
        label="Описание события"
        name="description"
        rules={[rules.required()]}
      >
        <Input
          value={event.discription}
          onChange={(e) => setEvent({ ...event, discription: e.target.value })}
        />
      </Form.Item>
      <Form.Item label="Дата события" name="date" rules={[rules.required()]}>
        <DatePicker onChange={(date) => selectDate(date)} />
      </Form.Item>
      <Form.Item rules={[rules.required()]}>
        <Select onChange={(guest: string) => setEvent({ ...event, guest })}>
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
