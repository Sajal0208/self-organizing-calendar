import TimeColumn from './TimeColumn'
import CalendarLayout from './CalendarLayout';
import { layoutEvents } from '../helper/layoutEvents';

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