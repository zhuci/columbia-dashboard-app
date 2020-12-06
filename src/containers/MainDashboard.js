import React from 'react';
import UsefulLink from '../components/UsefulLink';
import { Greeting } from "../components/Greeting";
import { Weather } from '../components/Weather';


export const MainDashboard = () => {
    return(
      <>
          <Greeting></Greeting>
          <Weather></Weather>
      </>
    );
};
