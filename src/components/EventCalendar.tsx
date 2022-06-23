import React, { FC, PropsWithChildren } from "react";
// Models
import { IEvent } from "../models/IEvent";
// Antd
import { Calendar } from "antd";
import { Moment } from "moment";
// Utils
import { formDate } from "../utils/date";

interface EventCalendarProps {
  events: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = (
  props: PropsWithChildren<EventCalendarProps>
) => {
  const dateCellRender = (value: Moment) => {
    const formatedDate = formDate(value.toDate());
    const currentDaysEvents = props.events.filter(
      (ev) => ev.date === formatedDate
    );
    return (
      <div>
        {currentDaysEvents.map((ev, index) => (
          <div key={index}>{ev.discription}</div>
        ))}
      </div>
    );
  };

  return <Calendar dateCellRender={dateCellRender} />;
};

export default EventCalendar;
