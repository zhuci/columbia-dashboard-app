import React from "react";
import styled from "styled-components";

export const Weather = () => {
    return(
        <BoxWrapper>
            <Emoji>☁️</Emoji>
            <Text>58°</Text>
            <Location> 📌 New York, NY</Location>
            <Temp>
                <High>
                    <div>63°</div>
                    <div>HIGH</div>
                </High>
                <High>
                    <div>55°</div>
                    <div>LOW</div>
                </High>
          </Temp>
          <Sunset> 
              <Time>
                    🌅 6:43 AM 
              </Time> 
              <Time>
                    🌇4:38 PM
              </Time>
          </Sunset>
      </BoxWrapper>
    );
};


const BoxWrapper = styled.div`
    margin: 20px;
    padding: 10px;
    width: 25%;
    background-color: white;
    border-radius: 10px;
    display: flex;
    box-shadow: 0px 0px 15px 0px #C1C1C1;
    align-items: center;
    flex-direction: column;
    color: black;
    font-weight: 600;
`;

const Emoji = styled.div`
    font-size: 100px;
`;

const Text = styled.div`
    color: black;
    margin: 10px;
    font-weight: 600;
    font-size: 30px;


`;

const Location = styled.div`
font-size: 20px;

`
const Temp = styled.div`
    display: flex;
    flex-direction: row;
    color: black;
    margin: 10px;
    font-weight: 600;
    font-size: 20px;

`

const High = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`

const Sunset = styled.div`
    display: flex;
    flex-direction: time;
`

const Time = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px;
    font-size: 20px;
`