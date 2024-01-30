import React from 'react'
import { CalendarEvent } from '../helper/layoutEvents'

const CalendarEventComponent = ({
  item,
  widthDividedInto,
  top,
  height,
  index,
}: {
  item: CalendarEvent;
  widthDividedInto: number;
  top: number;
  height: number;
  index: number;
}) => {
  const eventTimingWidth = 600 / widthDividedInto
  const eventTimingLeft = index * (600 / widthDividedInto)
  const { title, description } = item

  
  return (
    <div style={{
      top: `${top}px`,
      left: `${widthDividedInto === 1 ? "10" : eventTimingLeft + 10}px`,
      height: `${height}px`,
      width: `${eventTimingWidth}px`,
    }} className={`absolute border-l-4  border-black bg-white p-1 overflow-hidden`}>
      <p className = "text-sm text-blue-400">{title}</p>
      <p className='text-xs  text-gray-400'>{description}</p>
    </div>
  )
}

export default CalendarEventComponent