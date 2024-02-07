import TimeColumn from './TimeColumn'
import CalendarLayout from './CalendarLayout';
import { CalendarEvent, fakeTimings, layoutEvents } from '../helper/layoutEvents';
import { useEffect, useState } from 'react';
import AddEvent from './AddEvent';
import { Button } from './Button';

const Calendar = () => {
  const [events, setEvents] = useState<CalendarEvent[]>(fakeTimings);
  const [layout, setLayout] = useState<CalendarEvent[][]>([]);

  useEffect(() => {
    setLayout(layoutEvents(events));
  }, [events]);

  const addEvent = (newEvent: CalendarEvent) => {
    const newEvents = [...events, newEvent];
    setEvents(newEvents);
    setLayout(layoutEvents([...events, newEvent]));
  }

  const resetInput = () => {
    setEvents(fakeTimings);
  }

  return (
    <div className='flex flex-col justify-start items-start p-10'>
      <div className='flex flex-row justify-start w-full'>
        <AddEvent addEvent={addEvent} resetInput={resetInput} />
      </div>
      <div className='p-4 shadow-lg flex flex-row justify-center items-center rounded'>
        <TimeColumn />
        <CalendarLayout events={events} layout={layout} />
      </div>
    </div>
  )
}

export default Calendar