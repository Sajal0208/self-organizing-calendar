export type CalendarEvent = {
  id: string;
  title: string;
  description: string;
  start: number; // minutes from 9:00 AM
  end: number; // minutes from 9:00 AM
};

export const fakeTimings: CalendarEvent[] = [
  {
    id: "1",
    title: "Event 1",
    description: "Description 1",
    start: 15,
    end: 75
  },
  {
    id: "2",
    title: "Event 2",
    description: "Description 2",
    start: 60,
    end: 150
  },
  {
    id: "3",
    title: "Event 3",
    description: "Description 3",
    start: 120,
    end: 230
  },
  {
    id: "4",
    title: "Event 4",
    description: "Description 4",
    start: 220,
    end: 360
  },
  {
    id: "5",
    title: "Event 5",
    description: "Description 5",
    start: 390,
    end: 450
  },
  {
    id: "6",
    title: "Event 6",
    description: "Description 6",
    start: 480,
    end: 540
  },
  {
    id: "7",
    title: "Event 7",
    description: "Description 7",
    start: 500,
    end: 750
  },
];

function groupOverlappingEvents(events: CalendarEvent[]): CalendarEvent[][] {
  // Sort events by start time
  events.sort((a, b) => a.start - b.start);

  const result: CalendarEvent[][] = [];
  let tempGroup: CalendarEvent[] = [events[0]];

  for (let i = 1; i < events.length; i++) {
    const lastEventInTempGroup = tempGroup[tempGroup.length - 1];
    const currentEvent = events[i];

    // Check if the current event overlaps with the last event in the temp group
    if (currentEvent.start <= lastEventInTempGroup.end) {
      // Add current event to the temp group
      tempGroup.push(currentEvent);
    } else {
      // No overlap, push temp group to result and start a new group
      result.push(tempGroup);
      tempGroup = [currentEvent];
    }
  }

  // Don't forget to push the last group
  result.push(tempGroup);

  return result;
}

export const layoutEvents = (events: CalendarEvent[]) => {
  return groupOverlappingEvents(events);
};
