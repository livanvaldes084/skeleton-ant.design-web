import uuid from "uuid/v1";

export const dataEvent = [
  {
    id: uuid(),
    title: "All Day Event very long title",
    allDay: true,
    start: new Date(),
    end: new Date()
  }
];
