import { Moment } from "moment";

export const formDate = (date: Date): string => {
  const year = date.getFullYear();
  const month =
    date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() - 1;
  const day = date.getDay() < 10 ? `0${date.getDate()}` : date.getDate();
  return `${year}.${month}.${day}`;
};
