import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "20px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  title:{
    color: '#3F51B5',
    textTransform: 'uppercase',
  }
}));

export default function AllCountries() {
  const [countryData, setCountryData] = useState([{}]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://api.covid19api.com/summary");
      let data = await response.json();
      setCountryData(Object.values(data.Countries[{}]));
      console.log(data.Countries);
    }
    getData();
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {Object.keys(countryData).map((key, index) => {
          return (
            <Grid item xs={12} sm={4} key={index}>
              <Paper className={classes.paper} elevation={6}>
                <h3 className={classes.title}>{key}</h3>
                <h3>{countryData}</h3>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
