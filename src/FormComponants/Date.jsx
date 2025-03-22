import { DatePicker } from "@heroui/react";
import { customParseDate } from ".././services/timeFunctions";
import { fromDate } from "@internationalized/date";
import { useState } from "react";

const DateInput = ({ element, data, index }) => {
  const date = customParseDate(data);
  const [calendarDate, setCalendarDate] = useState(fromDate(date));
  const handleDateChange = (newDate) => {
    setCalendarDate(newDate); // `newDate` peut être un objet `Date`
  };
  return (
    <DatePicker
      key={index}
      value={calendarDate}
      onChange={setCalendarDate}
      size="sm"
      label={element.field_label || element.field_key}
    />
  );
};

export default DateInput;
