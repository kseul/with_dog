import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import 'react-datepicker/dist/react-datepicker.css';
import Form from 'react-bootstrap/Form';

const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      locale={ko}
      selected={startDate}
      onChange={date => setStartDate(date)}
      dateFormat="yyyy/MM/dd"
      customInput={<Form.Control style={{ height: '1.875rem' }} />}
    />
  );
};

export default DatePickerComponent;
