import { useState, useEffect } from "react";
import { Typography, Paper, Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { getData } from "../../services/getData";
import RacesTable from "./RacesTable";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});
const NextToGoRaces = () => {
  const [racesData, setRacesData] = useState({});
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(new Date());

  const classes = useStyles();

  useEffect(() => {
    const getRacesData = async () => {
      const { data } = await getData(process.env.REACT_APP_RACES_URL);
      setRacesData(data);
    };
    getRacesData();
  }, []);

  //   useEffect(() => {
  //     var timer = setInterval(() => setDate(new Date()), 1000);

  //     return () => clearInterval(timer);
  //   }, [date]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
    // const races_data = Object.values(racesData.race_summaries);
    //   setCategory(e.target.value.toLowerCase());
    //   const ss = dd.filter((rc) => rc.race_name.toLowerCase().includes(category));
    //   console.log(ss);
    //   return ss;
  };

  return (
    <>
      <Typography variant="h3" component="h2">
        Next to Go Races
      </Typography>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {racesData.race_summaries &&
            Object.values(racesData.race_summaries)
              .slice(0, 5)
              .map((data) => <Tab label={data.race_name} />)}
        </Tabs>
      </Paper>
      <RacesTable />
    </>
  );
};

export default NextToGoRaces;
