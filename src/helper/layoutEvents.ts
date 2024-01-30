// The event type definition
export type CalendarEvent = {
  id: number;
  start: number; // minutes from 9:00 AM
  end: number; // minutes from 9:00 AM
};

// Represent each event with a JavaScript object containing start and end attributes, representing minutes passed since 9 AM. For example, {start: 30, end: 90} signifies an event from 9:30 AM to 10:30 AM.
export const fakeTimings: CalendarEvent[] = [
  {
      id: 1,
      start: 30,
      end: 90
  },
  {
      id: 2,
      start: 60,
      end: 150
  },
  {
      id: 3,
      start: 120,
      end: 230
  },
  {
      id: 4,
      start: 220,
      end: 360
  },
  {
      id: 5,
      start: 390,
      end: 450
  },
  {
      id: 6,
      start: 480,
      end: 540
  },
  {
      id: 7,
      start: 500,
      end: 630
  },
]
// What below function does!
// result = [
//     [{
//         id: 1,
//         startTime: 30,
//         endTime: 90
//     },
//     {
//         id: 2,
//         startTime: 60,
//         endTime: 150
//     },
//     {
//         id: 3,
//         startTime: 120,
//         endTime: 230
//     },
//     {
//         id: 4,
//         startTime: 220,
//         endTime: 360
//     }],
//     [{
//         id: 5,
//         startTime: 390,
//         endTime: 450
//     }],
//     [{
//         id: 6,
//         startTime: 480,
//         endTime: 540
//     },
//     {
//         id: 7,
//         startTime: 500,
//         endTime: 630
//     },]
// ]

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
