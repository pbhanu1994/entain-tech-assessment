import { Typography, AppBar, Toolbar, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  toolbarPosition: {
    display: "flex",
    justifyContent: "space-between",
  },
  entainColor: {
    color: "#bf00ff",
  },
});
export const Navbar = ({ title, buttonLabel }) => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <AppBar position="static" color="transparent">
      <Toolbar className={classes.toolbarPosition}>
        <img
          width="100"
          src="data:image/png;base64,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"
        />
        <Typography variant="h4" component="h2" className={classes.entainColor}>
          {title}
        </Typography>
        <Button
          className={classes.entainColor}
          onClick={() => history.push("/thankyou")}
        >
          {buttonLabel}
        </Button>
      </Toolbar>
    </AppBar>
  );
};
