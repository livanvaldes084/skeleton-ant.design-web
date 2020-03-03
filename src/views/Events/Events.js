import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import eventsData from "./data";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";
import BigCalendar from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import moment from "moment";
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    height: "100vh"
  }
}));
BigCalendar.momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(BigCalendar);

const Events = () => {
  const classes = useStyles();
  const [events, setEvents] = useState(eventsData);
  const moveEvent = ({ event, start, end }) => {
    const idx = events.indexOf(event);
    const updatedEvent = { ...event, start, end };

    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updatedEvent);

    setEvents(nextEvents);
  };

  const resizeEvent = (resizeType, { event, start, end }) => {
    const nextEvents = events.map(existingEvent => {
      return existingEvent.id === event.id
        ? { ...existingEvent, start, end }
        : existingEvent;
    });

    setEvents(nextEvents);
  };
  return (
    <div className={classes.root}>
      <DragAndDropCalendar
        selectable
        events={events}
        onEventDrop={moveEvent}
        resizable
        onEventResize={resizeEvent}
        defaultView={BigCalendar.Views.MONTH}
        defaultDate={new Date(2015, 3, 12)}
      />
    </div>
  );
};
export default Events;
