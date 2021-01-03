import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "20px",
    margin: '0 auto',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  firstTable:{
    color: 'black',
    fontSize: '20px',
    fontWeight: 'bold',
    border: '1px solid black'
  },
  table:{
    width: '80%',
    padding: '10px',
    border: '1px solid black',
    margin: '0 auto',
    textAlign:'center',
  },
  tr: {
    border: '1px solid black'
  },
  td: {
    border: '1px solid black'
  },
  secondTable:{fontSize:'18px',
  border: '1px solid black'},
  black:{color:'#3F51B5',
  border: '1px solid black',
  fontSize: '18px',
  fontWeight: 'bold',},
  green:{color:'green',
  border: '1px solid black'},
  title:{
    color: '#3F51B5',
    textTransform: 'uppercase',
  }
}));

export default function AllCountries() {
  const [countryData, setCountryData] = useState([{}]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://coronavirus-19-api.herokuapp.com/countries");
      let data = await response.json();
      setCountryData(Object.values(data));
    }
    getData();
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
        <table className={classes.table}>
          <tr className={classes.firstTable}>
            <td className={classes.td}>COUNTRIES</td>
            <td className={classes.td}>CASES</td>
            <td className={classes.td}>DEATHS</td>
            <td className={classes.td}>ACTIVE</td>
            <td className={classes.td}>CRITICAL</td>
            <td className={classes.td}>RECOVERED</td>
          </tr>
        {countryData.map((key, ind) => {
          return (
            <tr className={classes.secondTable} key={ind}>
              <td className={classes.black}>{countryData[ind].country}</td>
              <td className={classes.td}>{countryData[ind].cases}</td>
              <td className={classes.td}>{countryData[ind].deaths}</td>
              <td className={classes.td}>{countryData[ind].active}</td>
              <td className={classes.td}>{countryData[ind].critical}</td>
              <td className={classes.green}>{countryData[ind].recovered}</td>
            </tr>
          );
        })}
        </table>
    </div>
  );
}