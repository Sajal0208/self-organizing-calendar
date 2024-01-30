import { Button } from "./Button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./Dialog"
import { v4 as uuidv4 } from 'uuid';
import { Label } from "./Label"
import { Input } from "./Input"
import { useState } from "react"
import { CalendarEvent } from "../helper/layoutEvents"
import { parseTimeForData, validateData } from "../helper/validateEventData";
import { toast } from "sonner"

export function AddEventButton({ addEvent }: {
    addEvent: (newEvent: CalendarEvent) => void
}) {
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [startTime, setStartTime] = useState<string>('')
    const [endTime, setEndTime] = useState<string>('')

    const handleChange = (e: any) => {
        const { name, value } = e.target
        switch (name) {
            case 'title':
                setTitle(value)
                break
            case 'description':
                setDescription(value)
                break
            case 'startTime':
                setStartTime(value)
                break
            case 'endTime':
                setEndTime(value)
                break
        }
    }

    const onClick = () => {
        if(startTime === '' || endTime === '') {
            toast('Please enter a start and end time')
            return
        }
        const parsedStartTime = parseTimeForData(startTime)
        const parsedEndTime = parseTimeForData(endTime)
        const isValid = validateData({ title, description, start: parsedStartTime, end: parsedEndTime })
        if(!isValid) return
        const event: CalendarEvent = {
            id: uuidv4(),
            title,
            description,
            start: parsedStartTime,
            end: parsedEndTime,
        }

        addEvent(event)
        return
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default">Add an Event</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create a new Event</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Title
                        </Label>
                        <Input name="title" value={title} onChange={handleChange} id="title" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">
                            Description
                        </Label>
                        <Input name="description" value={description} id="description" onChange={handleChange} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="startTime" className="text-right">
                            Start Time
                        </Label>
                        <Input type="time" name="startTime" value={startTime} id="startTime" onChange={handleChange} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="endTime" className="text-right">
                            End Time
                        </Label>
                        <Input type="time" name="endTime" value={endTime} id="endTime" onChange={handleChange} className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type = "button" onClick={onClick}>Add Event</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}


const AddEvent = ({ addEvent }: {
    addEvent: (newEvent: CalendarEvent) => void
}) => {
    return (
        <div className={'bg-gray-300 rounded-lg p-4 mb-2 w-full'}>
            <AddEventButton addEvent={addEvent} />
        </div>
    )
}

export default AddEvent