import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { getData } from "../../services/getData";

const NextToGoRaces = () => {
  const [racesData, setRacesData] = useState({});

  useEffect(() => {
    const getRacesData = async () => {
      const { data } = await getData(process.env.REACT_APP_RACES_URL);
      setRacesData(data);
    };

    getRacesData();
  }, []);

  //   setInterval(() => {
  //     console.log(
  //       "racesData",
  //       racesData.race_summaries &&
  //         Object.keys(racesData.race_summaries).map((key) =>
  //           new Date(
  //             racesData.race_summaries[key].advertised_start.seconds
  //           ).getSeconds()
  //         )
  //     );
  //   }, 1000);
  //   setInterval(() => {
  //     console.log(
  //       "racesData",
  //       new Date(
  //         racesData && racesData.race_summaries[0].advertised_start.seconds
  //       ).getSeconds()
  //     );
  //   }, 1000);

  return (
    <Typography variant="h3" component="h2">
      Next to Go Races
    </Typography>
  );
};

export default NextToGoRaces;
