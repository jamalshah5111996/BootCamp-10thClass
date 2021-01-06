import React from "react";
import GlobalStats from './GlobalStats';
import AllCountries from './AllCountries';
import Graph from './Graph';

export default function InfoPanel({currentScreen}) {

  if(currentScreen === 0)
  return <GlobalStats/>

  else if (currentScreen === 2)
  return <AllCountries/>
  
  else return <Graph/>

}
