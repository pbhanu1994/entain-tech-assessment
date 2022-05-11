import React from "react";
import { Button, Grid, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" style={{ marginTop: "5rem" }}>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Entain Tech Assessment
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Welcome to my Assessment for Entain Recruitment, Please click on
        Continue button below to get started.
      </Typography>
      <div className={classes.heroButtons}>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Button
              href="/dashboard"
              variant="contained"
              size="large"
              color="primary"
            >
              Continue
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
