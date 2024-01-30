import TimeColumn from './TimeColumn'
import CalendarLayout from './CalendarLayout';
import { CalendarEvent, fakeTimings, layoutEvents } from '../helper/layoutEvents';
import { useEffect, useState } from 'react';
import AddEvent from './AddEvent';

const Calendar = () => {
  const [events, setEvents] = useState<CalendarEvent[]>(fakeTimings);
  const [layout, setLayout] = useState<CalendarEvent[][]>([]);

  useEffect(() => {
      setLayout(layoutEvents(events));
  }, [events]);

  const addEvent = () => {
    const newEvent = {
      id: Math.random(),
      title: 'New Event',
      description: 'New Event Description',
      start: 20,
      end: 40,
    };
    const newEvents = [...events, newEvent];
    setEvents(newEvents);
    setLayout(layoutEvents([...events, newEvent]));
  }

  return (
    <div className='flex flex-col justify-start items-start p-10'>
      <div className='flex flex-row justify-start w-full'>
        <AddEvent />
      </div>
      <div className='p-4 shadow-lg flex flex-row justify-center items-center rounded'>
        <TimeColumn />
        <CalendarLayout events = {events} layout = {layout} />
      </div>
    </div>
  )
}

export default Calendar