import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import GridLayout from "react-grid-layout";

import {
  Budget,
  TotalUsers,
  TasksProgress,
  TotalProfit,
  LatestSales,
  UsersByDevice,
  LatestProducts,
  LatestOrders
} from "./components";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  // layout is an array of objects, see the demo for more complete usage
  const layout = [
    { i: "a", x: 0, y: 0, w: 2, h: 4, static: true },
    {
      i: "b",
      x: 2,
      y: 0,
      w: 2,
      h: 4
    },
    { i: "c", x: 4, y: 0, w: 3, h: 4 },
    { i: "d", x: 7, y: 0, w: 2.5, h: 4 },
    { i: "e", x: 0, y: 1, w: 4, h: 13.5 }
  ];
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={30}
          width={1200}
        >
          <div key="a">
            {" "}
            <Budget />
          </div>
          <div key="b">
            {" "}
            <TotalUsers />
          </div>
          <div key="c">
            {" "}
            <TasksProgress />
          </div>
          <div key="d">
            {" "}
            <TotalProfit />
          </div>
          <div key="e">
            {" "}
            <LatestSales />{" "}
          </div>
        </GridLayout>
      </Grid>
    </div>
  );
};

export default Dashboard;
