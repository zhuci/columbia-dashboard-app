import React from "react";
import styled from "styled-components";

const BoxWrapper = styled.div`
    margin-left: 5%;
    padding: 2%;
    width: 60%;
    height: 90%;
    display: flex;
    /* box-shadow: 0px 0px 15px 0px red; */
    flex-direction: column;
    justify-content: flex-start;
`;

const Date = styled.div`
    color: black;
    font-weight: 700;
    font-size: 3.2vw;
`;

const TimeContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
`;

const Time = styled.div`
    font-size: 10vw;
    padding: 0;
    font-weight: 600;
`;

const TimePeriod = styled.div`
    text-transform: uppercase;
    font-size: 6vw;
    font-weight: 500;
    padding: 0;
    transform: translate(2vw, -.8vw);
`;

const QuoteContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Quote = styled.p`
    font-size: 2vw;
    padding-left: 1vw;
    color: white;
    font-weight: 600;
`;

const Author = styled.p`
    font-size: 2.5vw;
    color: white;
    transform: translate(10vw, -2vw);
`;

export const DateAndQuote = () => {
    return(
      <BoxWrapper>
          <Date>December 13, 2020</Date>
          <TimeContainer>
            <Time>7:09</Time>
            <TimePeriod>PM</TimePeriod>
          </TimeContainer>
          <QuoteContainer>
            <Quote>This will be the most profound of quotes, surely. When it starts working, that is.</Quote>
            <Author>~Anonymous</Author>
          </QuoteContainer>
      </BoxWrapper>
    );
};