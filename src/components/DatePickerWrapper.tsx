import React from "react";
import DatePicker, { DatePickerProps, registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";
import styled from "@emotion/styled";

registerLocale("ko", ko);

// DatePicker의 전체 컨테이너 스타일
const StyledDatePickerContainer = styled.div`
  /* 커스텀 드롭다운 스타일 */

  .react-datepicker__current-month {
    display: none;
  }

  .react-datepicker__header__dropdown {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    margin: 10px 0;
  }

  .react-datepicker__header {
    color: white;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background-color: #007bff;
    color: white;
  }
`;

const DatePickerWrapper: React.FC<DatePickerProps> = (props) => {
  return (
    <StyledDatePickerContainer>
      <DatePicker {...props} />
    </StyledDatePickerContainer>
  );
};

export default DatePickerWrapper;
