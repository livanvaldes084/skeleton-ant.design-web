import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(theme => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));
const FloatButton = props => {
  const classes = useStyles();
  return (
    <Fab
      color="secondary"
      aria-label="add"
      className={classes.fab}
      onClick={props.handleClickFloatButton}
    >
      <AddIcon />
    </Fab>
  );
};
export default FloatButton;
