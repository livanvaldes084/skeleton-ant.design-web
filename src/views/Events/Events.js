import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/styles";
import BigCalendar from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import moment from "moment";
import { connect } from "react-redux";
import { FloatButton } from "components";
import { GenericModal } from "components";
import ModalContext from "context/ModalContext";
import FormEvent from "./components/FormEvent";
import { Button } from "antd";
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    height: "100vh"
  }
}));
BigCalendar.momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(BigCalendar);

const Events = props => {
  const classes = useStyles();
  const [events, setEvents] = useState(props.events);
  const { showLoading, hideLoading } = useContext(ModalContext);

  /**
   * Move Event
   * @param {*} param0
   */
  const moveEvent = ({ event, start, end }) => {
    const idx = events.indexOf(event);
    const updatedEvent = { ...event, start, end };

    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updatedEvent);

    setEvents(nextEvents);
  };

  /**
   * Resize Event
   * @param {*} resizeType
   * @param {*} param1
   */
  const resizeEvent = (resizeType, { event, start, end }) => {
    const nextEvents = events.map(existingEvent => {
      return existingEvent.id === event.id
        ? { ...existingEvent, start, end }
        : existingEvent;
    });

    setEvents(nextEvents);
  };

  /**
   * Function when the user click in float button
   * @param {*} e
   */
  const handleClickFloatButton = e => {
    showLoading();
  };

  /**
   *Handle Cancel
   * @param {*} e
   */
  const handleCancel = e => {
    hideLoading();
  };
  /**
   *Handle Cancel
   * @param {*} e
   */
  const handleApply = e => {
    hideLoading();
  };

  /**
   *Handle Cancel
   * @param {*} e
   */
  const handleAccept = e => {
    hideLoading();
  };

  return (
    <div className={classes.root}>
      <GenericModal
        title="Add event"
        width={800}
        body={<FormEvent />}
        footer={[
          <Button key="cancelEvents" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="applyEvents" onClick={handleApply}>
            Apply
          </Button>,
          <Button key="acceptEvents" onClick={handleAccept}>
            Accept
          </Button>
        ]}
      />
      <DragAndDropCalendar
        selectable
        events={events}
        onEventDrop={moveEvent}
        resizable
        onEventResize={resizeEvent}
        defaultView={BigCalendar.Views.MONTH}
        defaultDate={new Date()}
      />
      <FloatButton handleClickFloatButton={handleClickFloatButton} />
    </div>
  );
};
const mapStateToProps = state => {
  return {
    events: state.events.items
  };
};
export default connect(mapStateToProps)(Events);
