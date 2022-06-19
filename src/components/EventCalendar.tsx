import React, { FC } from "react";
// Models
import { IEvent } from "../models/IEvent";
// Antd
import { Calendar } from "antd";

interface EventCalendarProps {
  events: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = () => {
  return <Calendar />;
};

export default EventCalendar;
