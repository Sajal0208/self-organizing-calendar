import { CalendarEvent } from "./layoutEvents";
import { toast } from "sonner"

export const parseTimeForData = (time: string) => {
    const [hours, minutes] = time.split(':')
    return (parseInt(hours) * 60 + parseInt(minutes)) - 540
}

export const validateData = (data: {
    title: string,
    description: string,
    start: number,
    end: number
}) => {
    const { title, description, start, end } = data
    let isValid = true;

    if(start > end) {
        toast('Start time cannot be greater than end time')
        isValid = false
    }
    if(start === end) {
        toast('Start time cannot be equal to end time')
        isValid = false 
    }

    if(title === '') {
        toast('Title cannot be empty')
        isValid = false
    }

    if(description === '') {
        toast('Description cannot be empty')
        isValid = false
    }

    if(start < 0 || end < 0 || start > 720 || end > 720) {
        toast('Please enter timings between 9:00 AM and 9:00 PM')
        isValid = false
    }

    return isValid
}