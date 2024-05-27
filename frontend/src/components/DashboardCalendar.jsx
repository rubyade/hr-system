import React from 'react';
import { Calendar } from '@nextui-org/react';
import { today, getLocalTimeZone } from '@internationalized/date';

function DashboardCalendar() {
  let defaultDate = today(getLocalTimeZone());
  let [focusedDate, setFocusedDate] = React.useState(defaultDate);

  return (
    <div>
      <Calendar
        aria-label='Date (Controlled Focused Value)'
        focusedValue={focusedDate}
        value={defaultDate}
        onFocusChange={setFocusedDate}
      />
    </div>
  );
}

export default DashboardCalendar;
