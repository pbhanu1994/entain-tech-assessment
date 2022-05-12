import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: "2rem",
  },
});

export const RacesTabs = ({ value, handleChange, racesData }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        {racesData.race_summaries &&
          Object.values(racesData.race_summaries)
            .slice(0, 5)
            .map((data, index) => <Tab key={index} label={data.race_name} />)}
      </Tabs>
    </Paper>
  );
};
