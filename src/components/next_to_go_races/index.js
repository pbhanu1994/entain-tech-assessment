import { useState, useEffect } from "react";
import { Typography, Paper, Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
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

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);

    return () => clearInterval(timer);
  }, [date]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
    newValue !== 0 &&
      setCategory(
        Object.values(racesData.race_summaries)[
          newValue - 1
        ].race_name.toLowerCase()
      );
  };

  const columns = [
    {
      field: "raceNumber",
      headerName: "Race Number",
      width: 350,
      editable: true,
    },
    {
      field: "meetingName",
      headerName: "Meeting Name",
      width: 350,
      editable: true,
    },
    {
      field: "raceTime",
      headerName: "Race Starts at",
      width: 350,
      editable: true,
    },
  ];

  const rowsData = [];

  racesData.race_summaries &&
    Object.values(racesData.race_summaries)
      .slice(0, 5)
      .filter((raceObj) =>
        value !== 0
          ? raceObj.race_name.toLowerCase().includes(category)
          : raceObj.race_name.toLowerCase()
      )
      .sort((a, b) =>
        moment(a.advertised_start.seconds * 1000)
          .format("LTS")
          .localeCompare(
            moment(b.advertised_start.seconds * 1000).format("LTS")
          )
      )
      .filter(
        (item) =>
          moment(item.advertised_start.seconds * 1000).diff(
            moment(date),
            "minutes"
          ) > 1
      )
      .map((item, index) =>
        rowsData.push({
          id: index,
          raceNumber: item.race_number,
          meetingName: item.meeting_name,
          raceTime: `${moment(item.advertised_start.seconds * 1000).format(
            "h:mm:ss A"
          )} ${moment(item.advertised_start.seconds * 1000).from(
            moment(date)
          )}`,
        })
      );
  const rows = [...rowsData];

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
          <Tab label="All" />
          {racesData.race_summaries &&
            Object.values(racesData.race_summaries)
              .slice(0, 5)
              .map((data, index) => <Tab key={index} label={data.race_name} />)}
        </Tabs>
      </Paper>
      <RacesTable columns={columns} rows={rows} />
    </>
  );
};

export default NextToGoRaces;
