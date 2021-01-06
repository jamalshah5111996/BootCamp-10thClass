import React, {useEffect, useState} from 'react';
import {Pie} from 'react-chartjs-2';
import '../App.css';

export default function Graph(){

    const [globalData, setGlobalData] = useState({});

    useEffect(() => {
      async function getData() {
        const response = await fetch("https://coronavirus-19-api.herokuapp.com/all");
        let data = await response.json();
        setGlobalData(data);
      }
      getData();
    }, []);
    console.log(globalData.cases)  

      const data = {
        labels: [
            'TOTAL CASES',
            'DEATHS',
            'RECOVERED'
        ],
        datasets: [{
            data: [(globalData.cases), (globalData.deaths), (globalData.recovered)],
            backgroundColor: [
            'orange',
            'red',
            'green'
            ],
            hoverBackgroundColor: [
            '#FFDF77',
            '#800000',
            '#869661'
            ]
        }]
    };


    return (
        <div>
          <h2 className='title'>Covid 19 Chart</h2>
          <div className='graph'>
          <Pie data={data} />
          </div>
        </div>
      );
    }