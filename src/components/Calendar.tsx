import React from 'react'
import TimeColumn from './TimeColumn'

const CalendarLayout = () => {
  return (
    <div className='bg-gray-400 w-[620px] px-10 h-[720px]'>
      Hello
    </div>
  )
}

const Calendar = () => {
  return (
    <div className='p-4'>
      <div className='p-4 shadow-lg flex flex-row justify-center items-center'>
        <TimeColumn />
        <CalendarLayout />
      </div>
    </div>
  )
}

export default Calendar