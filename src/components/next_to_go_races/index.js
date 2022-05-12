import { useState, useEffect } from "react";
import moment from "moment";
import { getData } from "../../services/getData";
import { Navbar } from "../common/Navbar";
import { Table } from "../common/Table";
import { RacesTabs } from "./RacesTabs";

const NextToGoRaces = () => {
  const [racesData, setRacesData] = useState({});
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(new Date());

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
      <Navbar title="Next To Go Races" buttonLabel="Thank you" />
      <RacesTabs
        value={value}
        handleChange={handleChange}
        racesData={racesData}
      />
      <Table columns={columns} rows={rows} />
    </>
  );
};

export default NextToGoRaces;
