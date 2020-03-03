import React, { useContext } from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import GridLayout from "react-grid-layout";

import { connect } from "react-redux";
import { ListWidget } from "./components";

import * as components from "./components";
import { FloatButton } from "components";
import { GenericModal } from "components";
import { CloseOutlined } from "@ant-design/icons";
import ModalContext from "context/ModalContext";
import { deleteWidget } from "actions/widgetActions";
import { Button } from "antd";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = props => {
  const classes = useStyles();
  const { showLoading, hideLoading } = useContext(ModalContext);

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
   * Remove item dasboard
   * @param {*} i
   */
  const onRemoveItem = i => {
    props.deleteWidget(i);
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
        width={800}
        body={<ListWidget />}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>
        ]}
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
    widgets: state.widgets.items
  };
};
const mapDispatchToProps = {
  deleteWidget
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
