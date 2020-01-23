import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import { Table } from "../../components";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item lg={12} sm={12} xl={12} xs={12}>
          <Table
            columnsTable={[
              { title: "Namedd", field: "name" },
              { title: "Surname", field: "surname" },
              { title: "Birth Year", field: "birthYear", type: "numeric" },
              {
                title: "Birth Place",
                field: "birthCity",
                lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
              }
            ]}
            dataTable={[
              {
                name: "Mehmet",
                surname: "Baran",
                birthYear: 1987,
                birthCity: 63
              },
              {
                name: "Zerya Betül",
                surname: "Baran",
                birthYear: 2017,
                birthCity: 34
              }
            ]}
            actionsTable={[
              {
                icon: "save",
                tooltip: "Save User",
                onClick: (event, rowData) => alert("You saved " + rowData.name)
              }
            ]}
            titleTable="Test"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
