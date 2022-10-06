import React, { Dispatch, SetStateAction } from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import Form from 'react-bootstrap/Form';

interface DatePickerComponentProps {
  startDate: Date;
  endDate: Date;
  setStartDate: Dispatch<SetStateAction<Date>>;
  setEndDate: Dispatch<SetStateAction<Date>>;
}

const DatePickerComponent = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}: DatePickerComponentProps) => {
  return (
    <DatePickerWrapper>
      <DatePicker
        locale={ko}
        selected={startDate}
        startDate={startDate}
        endDate={endDate}
        selctsStart
        onChange={date => setStartDate(date)}
        dateFormat="yyyy/MM/dd"
        customInput={
          <Form.Control style={{ height: '1.875rem', width: '6rem' }} />
        }
        maxDate={endDate}
      />
      <DatePicker
        locale={ko}
        selected={endDate}
        startDate={startDate}
        endDate={endDate}
        selctsEnd
        onChange={date => setEndDate(date)}
        dateFormat="yyyy/MM/dd"
        customInput={
          <Form.Control style={{ height: '1.875rem', width: '6rem' }} />
        }
        maxDate={endDate}
      />
    </DatePickerWrapper>
  );
};

const DatePickerWrapper = styled.div`
  ${props => props.theme.flex.flexBox('', '', '')}
`;

export default DatePickerComponent;
