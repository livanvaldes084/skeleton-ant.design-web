import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import GridLayout from "react-grid-layout";

import { connect } from "react-redux";
import { ListWidget } from "./components";

import * as components from "./components";
import { FloatButton } from "components";
import { GenericModal } from "components";
import { CloseOutlined } from "@ant-design/icons";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = props => {
  const classes = useStyles();
  const [visible, setVisible] = useState(false);

  //Function when the user click in float button
  const handleClickFloatButton = e => {
    setVisible(true);
  };
  const handleOk = e => {
    setVisible(false);
  };
  const handleCancel = e => {
    setVisible(false);
  };
  const onRemoveItem = i => {
    console.log("removing", i);
  };

  //Create Element
  const createElement = el => {
    const removeStyle = {
      position: "absolute",
      right: "2px",
      top: 0,
      cursor: "pointer"
    };
    const i = el.id;
    const MyComponent = components[el.cmp];
    return (
      <div
        key={i}
        data-grid={
          el.position || {
            x: (props.widgets.length * 2) % 12,
            y: Infinity, // puts it at the bottom
            w: 2,
            h: 4
          }
        }
      >
        <span
          className="remove"
          style={removeStyle}
          onClick={onRemoveItem.bind(this, i)}
        >
          <CloseOutlined />
        </span>
        <MyComponent />
      </div>
    );
  };
  return (
    <div className={classes.root}>
      <GenericModal
        title="Select widget"
        visible={visible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        width={800}
        body={<ListWidget />}
      />
      <Grid container spacing={4}>
        <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
          {props.widgets.map(widget => {
            return createElement(widget);
          })}
        </GridLayout>
      </Grid>
      <FloatButton handleClickFloatButton={handleClickFloatButton} />
    </div>
  );
};
const mapStateToProps = state => {
  return {
    widgets: state.widgets
  };
};
export default connect(mapStateToProps)(Dashboard);
