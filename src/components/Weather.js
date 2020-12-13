import React from "react";
import styled from "styled-components";

export const Weather = () => {
    return(
        <BoxWrapper>
            <a href="https://imgbb.com/"><img src="https://i.ibb.co/9wmsgwJ/cloudicon.png" alt="cloudicon" border="0" height="100"></img></a>
            <Text>58°</Text>
            <Location> 📌 New York, NY</Location>
            <Temp>
                <High>
                    <HighTemp>63°</HighTemp>
                    <div>HIGH</div>
                </High>
                <High>
                    <HighTemp>55°</HighTemp>
                    <div>LOW</div>
                </High>
            </Temp>
            <Sunset> 
                 <Time>
                    🌅 6:43 AM 
                 </Time> 
                 <Time>
                    🌇 4:38 PM
                 </Time>
            </Sunset>
      </BoxWrapper>
    );
};


const BoxWrapper = styled.div`
    padding: 2%;
    width: 35%;
    height: 80%;
    background-color: white;
    border-radius: 10px;
    display: flex;
    box-shadow: 0px 0px 15px 0px #707887;
    align-items: center;
    flex-direction: column;
    color: black;
    font-weight: 600;
    transition: .7s;
    margin: 1.5vw;

    :hover {
        width: 37%;
        height: 82%;
        margin: .95vw;
    }
`;

const Text = styled.div`
    color: black;
    margin: 10px;
    font-weight: 800;
    font-size: 5vw;
    padding-left: 1vw;
`;

const Location = styled.div`
font-size: 2vw;

`
const Temp = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: black;
    margin: 10px;
    font-weight: 700;
    font-size: 1.5vw;

`

const High = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 2vw;
    margin-right: 2vw;
    margin-top: .7vw;
`

const HighTemp = styled.div`
    padding-left: .2vw;
    font-size: 2.2vw;
`

const Sunset = styled.div`
    display: flex;
    flex-direction: row;
`

const Time = styled.div`
    display: flex;
    flex-direction: row;
    margin: 1vw;
    font-size: 1.3vw;
`