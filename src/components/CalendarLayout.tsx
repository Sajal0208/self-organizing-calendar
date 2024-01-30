import React from 'react'
import { CalendarEvent, fakeTimings, layoutEvents } from '../helper/layoutEvents';
import { useState, useEffect } from 'react';
import CalendarEventComponent from './CalendarEventComponent';

const CalendarLayout = () => {
    const [events, setEvents] = useState<CalendarEvent[]>(fakeTimings);
    const [layout, setLayout] = useState<CalendarEvent[][]>([]);

    useEffect(() => {
        setLayout(layoutEvents(events));
    }, [events]);

    return (
      <div className='relative bg-gray-300 w-[620px] px-2.5 h-[720px]'>
        {layout.map((item: CalendarEvent[]) => {
            if(item.length === 1) {
                const {start, end} = item[0]
                const eventTimingLength = end - start
                const eventTimingHeight = eventTimingLength * 1
                const eventTimingTop = start * 1

                return (
                    <>
                        <CalendarEventComponent top = {eventTimingTop} index = {1} height = {eventTimingHeight} widthDividedInto = {1} item = {item[0]} key = {item[0].id} />
                    </>
                )
            }

            return (
                <>
                    {item.map((event: CalendarEvent, index: number) => {
                        const {start, end} = event
                        const eventTimingLength = end - start
                        const eventTimingHeight = eventTimingLength * 1
                        const eventTimingTop = start * 1

                        return (
                            <>
                                <CalendarEventComponent index = {index} top = {eventTimingTop} height = {eventTimingHeight} widthDividedInto = {item.length} item = {event} key = {event.id} />
                            </>
                        )
                    })}
                </>
            )   
        })}
      </div>
    )
  }
  
  
export default CalendarLayout;