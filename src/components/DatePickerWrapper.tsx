
import React from "react";
import DatePicker, { DatePickerProps, registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";

registerLocale("ko", ko);

const DatePickerWrapper: React.FC<DatePickerProps> = (props) => {
  return <DatePicker {...props} />;
};

export default DatePickerWrapper;
