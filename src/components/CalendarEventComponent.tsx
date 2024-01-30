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
  const { start, end } = item
  const eventTimingWidth = 620 / widthDividedInto
  const eventTimingLeft = index * (620 / widthDividedInto)

  return (
    <div style = {{
      top: `${top}px`,
      left: `${widthDividedInto === 1 ? "0" : eventTimingLeft}px`,
      height: `${height}px`,
      width: `${eventTimingWidth}px`,
    }} className={`absolute border-l-4  border-black bg-white`}>
      Hello
    </div>
  )
}

export default CalendarEventComponent