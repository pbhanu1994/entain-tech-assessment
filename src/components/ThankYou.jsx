import React from "react";
import { Button, Grid, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  entainColor: {
    color: "#bf00ff",
  },
}));

export default function ThankYou() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" style={{ marginTop: "5rem" }}>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        className={classes.entainColor}
        gutterBottom
      >
        Thank You!
      </Typography>
      <Typography
        component="h6"
        variant="h6"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Thank You for viewing the upcoming race timings!
      </Typography>
      <div className={classes.heroButtons}>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Button href="/" size="large" className={classes.entainColor}>
              Go Home
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
