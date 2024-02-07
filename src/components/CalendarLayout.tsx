import { CalendarEvent, groupContinuousEvents } from '../helper/layoutEvents';
import { useState, useEffect } from 'react';
import CalendarEventComponent from './CalendarEventComponent';

const CalendarLayout = ({ events, layout }: {
    events: CalendarEvent[],
    layout: CalendarEvent[][]
}) => {

    useEffect(() => {

    }, [layout])

    return (
        <div className='relative bg-gray-300 w-[620px] px-2.5 h-[720px] overflow-hidden'>
            {layout.map((item: CalendarEvent[]) => {
                if (item.length === 1) {
                    const { start, end } = item[0]
                    const eventTimingLength = end - start
                    const eventTimingHeight = eventTimingLength * 1
                    const eventTimingTop = start * 1

                    return (
                        <>
                            <CalendarEventComponent top={eventTimingTop} index={1} height={eventTimingHeight} widthDividedInto={1} item={item[0]} key={item[0].id} />
                        </>
                    )
                }

                const groupedEvents: CalendarEvent[][] = groupContinuousEvents(item);
                console.log(groupedEvents, 'groupedEvents')

                return (
                    <>
                        {groupedEvents.map((group: CalendarEvent[], index: number) => {
                            const outerIndex = index;
                            if (group.length === 1) {
                                const { start, end } = group[0]
                                const eventTimingLength = end - start
                                const eventTimingHeight = eventTimingLength * 1
                                const eventTimingTop = start * 1
                                return (
                                    <>
                                        <CalendarEventComponent top={eventTimingTop} index={outerIndex} height={eventTimingHeight} widthDividedInto={groupedEvents.length} item={group[0]} key={group[0].id} />
                                    </>
                                )
                            } else {
                                return (
                                    <>
                                        {group.map((event: CalendarEvent) => {
                                            const { start, end } = event
                                            const eventTimingLength = end - start
                                            const eventTimingHeight = eventTimingLength * 1
                                            const eventTimingTop = start * 1
                                            return (
                                                <>
                                                    <CalendarEventComponent top={eventTimingTop} index={outerIndex} height={eventTimingHeight} widthDividedInto={groupedEvents.length} item={event} key={event.id} />
                                                </>
                                            )
                                        })}
                                    </>
                                )
                            }
                        })}
                    </>
                )
            })}
        </div>
    )
}


export default CalendarLayout;