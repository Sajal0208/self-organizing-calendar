export type CalendarEvent = {
  id: string;
  title: string;
  description: string;
  start: number; // minutes from 9:00 AM
  end: number; // minutes from 9:00 AM
};

export const fakeTimings: CalendarEvent[] = [
  { id: "1", title: "Sample item", description: "Event 1", start: 10, end: 90 },
  { id: "2", title: "Sample item", description: "Event 2", start: 20, end: 80 },
  {
    id: "3",
    title: "Sample item",
    description: "Event 3",
    start: 70,
    end: 180,
  },
  {
    id: "4",
    title: "Sample item",
    description: "Event 4",
    start: 90,
    end: 180,
  },
  {
    id: "5",
    title: "Sample item",
    description: "Event 5",
    start: 200,
    end: 270,
  },
  {
    id: "6",
    title: "Sample item",
    description: "Event 6",
    start: 230,
    end: 290,
  },
  {
    id: "7",
    title: "Sample item",
    description: "Event 7",
    start: 300,
    end: 340,
  },
  {
    id: "8",
    title: "Sample item",
    description: "Event 8",
    start: 350,
    end: 400,
  },
  {
    id: "9",
    title: "Sample item",
    description: "Event 9",
    start: 370,
    end: 580,
  },
  {
    id: "10",
    title: "Sample item",
    description: "Event 10",
    start: 410,
    end: 480,
  },
  {
    id: "11",
    title: "Sample item",
    description: "Event 11",
    start: 450,
    end: 590,
  },
  {
    id: "12",
    title: "Sample item",
    description: "Event 12",
    start: 500,
    end: 595,
  },
  {
    id: "13",
    title: "Sample item",
    description: "Event 13",
    start: 530,
    end: 590,
  },
  {
    id: "14",
    title: "Sample item",
    description: "Event 14",
    start: 600,
    end: 660,
  },
  {
    id: "15",
    title: "Sample item",
    description: "Event 15",
    start: 650,
    end: 690,
  },
  {
    id: "16",
    title: "Sample item",
    description: "Event 16",
    start: 670,
    end: 710,
  },
];

// Output ->
// [
// [
//   { id: "1", title: "Sample item", description: "Event 1", start: 10, end: 90 },
//   { id: "2", title: "Sample item", description: "Event 2", start: 20, end: 80 },
//   { id: "3", title: "Sample item", description: "Event 3", start: 70, end: 180 },
//   { id: "4", title: "Sample item", description: "Event 4", start: 90, end: 180 },
// ],
//   [
//         { id: "5", title: "Sample item", description: "Event 5", start: 200, end: 270 },
//     { id: "6", title: "Sample item", description: "Event 6", start: 230, end: 290 },
//   ],
// [
//   { id: "7", title: "Sample item", description: "Event 7", start: 300, end: 340 },
// ],
// [
//   { id: "8", title: "Sample item", description: "Event 8", start: 350, end: 400 },
//   { id: "9", title: "Sample item", description: "Event 9", start: 370, end: 580 },
//   { id: "10", title: "Sample item", description: "Event 10", start: 410, end: 480 },
//   { id: "11", title: "Sample item", description: "Event 11", start: 450, end: 590 },
//   { id: "12", title: "Sample item", description: "Event 12", start: 500, end: 595 },
//   { id: "13", title: "Sample item", description: "Event 13", start: 530, end: 590 },
// ],
//   [
//     { id: "14", title: "Sample item", description: "Event 14", start: 600, end: 660 },
//     { id: "15", title: "Sample item", description: "Event 15", start: 650, end: 690 },
//     { id: "16", title: "Sample item", description: "Event 16", start: 670, end: 710 },
//   ],
// ]
function groupOverlappingEvents(events: CalendarEvent[]): CalendarEvent[][] {
  // Sort events by start time
  events.sort((a, b) => a.start - b.start);

  const result: CalendarEvent[][] = [];
  let tempGroup: CalendarEvent[] = [events[0]];
  let lastEventInTempGroup = events[0];
  let currentGroupMaxLastTiming = events[0].end;

  for (let i = 1; i < events.length; i++) {
    lastEventInTempGroup = tempGroup[tempGroup.length - 1];
    const currentEvent = events[i];

    // Check if the current event overlaps with the last event in the temp group
    if (
      currentEvent.start < lastEventInTempGroup.end ||
      currentEvent.start < currentGroupMaxLastTiming
    ) {
      // Add current event to the temp group
      tempGroup.push(currentEvent);

      // Update the max last timing for the current group

      if (currentEvent.end > currentGroupMaxLastTiming) {
        currentGroupMaxLastTiming = currentEvent.end;
      }
    } else {
      // No overlap, push temp group to result and start a new group
      result.push(tempGroup);
      tempGroup = [currentEvent];
    }
  }

  result.push(tempGroup);

  return result;
}

// [
//   [
//     [
//       {
//         id: "1",
//         title: "Sample item",
//         description: "Event 1",
//         start: 10,
//         end: 90,
//       },
//       {
//         id: "4",
//         title: "Sample item",
//         description: "Event 4",
//         start: 90,
//         end: 180,
//       },
//     ],
//     [
//       {
//         id: "2",
//         title: "Sample item",
//         description: "Event 2",
//         start: 20,
//         end: 80,
//       },
//     ],
//     [
//       {
//         id: "3",
//         title: "Sample item",
//         description: "Event 3",
//         start: 70,
//         end: 180,
//       },
//     ],
//   ],
//   [
//     [
//       {
//         id: "5",
//         title: "Sample item",
//         description: "Event 5",
//         start: 200,
//         end: 270,
//       },
//     ],
//     [
//       {
//         id: "6",
//         title: "Sample item",
//         description: "Event 6",
//         start: 230,
//         end: 290,
//       },
//     ],
//   ],
//   [
//     [
//       {
//         id: "7",
//         title: "Sample item",
//         description: "Event 7",
//         start: 300,
//         end: 340,
//       },
//     ],
//   ],
//   [
//     [
//       {
//         id: "8",
//         title: "Sample item",
//         description: "Event 8",
//         start: 350,
//         end: 400,
//       },
//       {
//         id: "10",
//         title: "Sample item",
//         description: "Event 10",
//         start: 410,
//         end: 480,
//       },
//       {
//         id: "12",
//         title: "Sample item",
//         description: "Event 12",
//         start: 500,
//         end: 595,
//       },
//     ],
//     [
//       {
//         id: "9",
//         title: "Sample item",
//         description: "Event 9",
//         start: 370,
//         end: 580,
//       },
//     ],
//     [
//       {
//         id: "11",
//         title: "Sample item",
//         description: "Event 11",
//         start: 450,
//         end: 590,
//       },
//     ],
//     [
//       {
//         id: "13",
//         title: "Sample item",
//         description: "Event 13",
//         start: 530,
//         end: 590,
//       },
//     ],
//   ],
//   [
//     [
//       {
//         id: "14",
//         title: "Sample item",
//         description: "Event 14",
//         start: 600,
//         end: 660,
//       },
//     ],
//     [
//       {
//         id: "15",
//         title: "Sample item",
//         description: "Event 15",
//         start: 650,
//         end: 690,
//       },
//     ],
//     [
//       {
//         id: "16",
//         title: "Sample item",
//         description: "Event 16",
//         start: 670,
//         end: 710,
//       },
//     ],
//   ],
// ];
export function groupContinuousEvents(
  events: CalendarEvent[]
): CalendarEvent[][] {
  const sortedEvents = events.slice().sort((a, b) => a.start - b.start);
  const result: CalendarEvent[][] = [];

  // A helper function to find the index of the sub-array that the event can be continuously added to
  const findContinuousSubArrayIndex = (event: CalendarEvent): number => {
    for (let i = 0; i < result.length; i++) {
      // Check if the event can be placed continuously in the sub-array
      const lastEventInSubArray = result[i][result[i].length - 1];
      if (lastEventInSubArray.end <= event.start) {
        return i;
      }
    }
    return -1; // Return -1 if no continuous sub-array is found
  };

  for (const event of sortedEvents) {
    const continuousSubArrayIndex = findContinuousSubArrayIndex(event);
    if (continuousSubArrayIndex > -1) {
      // If a continuous sub-array is found, add the event to it
      result[continuousSubArrayIndex].push(event);
    } else {
      // Otherwise, start a new sub-array with the event
      result.push([event]);
    }
  }

  return result;
}

export const layoutEvents = (events: CalendarEvent[]) => {
  const finalEvents = groupOverlappingEvents(events);
  return finalEvents;
};
