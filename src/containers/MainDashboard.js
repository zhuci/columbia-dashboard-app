import React from 'react';
import { UsefulLinks } from '../components/UsefulLinks';
import { Greeting } from "../components/Greeting";
import { Weather } from '../components/Weather';
import { News } from '../components/News';
import { DateAndQuote } from '../components/DateAndQuote';
import styled from "styled-components";



document.body.style.background = "#A9C2F0 url('https://ibb.co/L8hVQ7Z')";

const FullPage = styled.div`
    display: flex;
`;

const LeftContainer = styled.div`
    display: flex;
    width: 70%;
    border-style: solid;
    border-color: white;
    border-width: .2vw;
    flex-direction: column;
`;

const ContentBox = styled.div`
    margin: 1.5%;
    width: 95%;
    display: flex;
    border-style: solid;
    border-color: white;
    border-width: .2vw;
    align-items: center;
`;

export const MainDashboard = () => {
    return(
      <FullPage> 
        <LeftContainer>
          <Greeting></Greeting>
          <ContentBox>
            <Weather></Weather>
            <DateAndQuote></DateAndQuote>
          </ContentBox>
          <UsefulLinks>
          </UsefulLinks>
        </LeftContainer>
        <News></News>
      </FullPage>
    );
};