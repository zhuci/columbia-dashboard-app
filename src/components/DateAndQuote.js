import React, { Component } from 'react';
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
    font-size: 11vw;
    padding: 0;
    font-weight: 600;
`;

const TimePeriod = styled.div`
    text-transform: uppercase;
    font-size: 5vw;
    font-weight: 500;
    padding: 0;
    transform: translate(2vw, -.9vw);
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


// export const DateAndQuote = () => {
//     return(
//       <BoxWrapper>
//           <Date>December 13, 2020</Date>
//           <TimeContainer>
//             <Time>7:09</Time>
//             <TimePeriod>PM</TimePeriod>
//           </TimeContainer>
//           <QuoteContainer>
//             <Quote>This will be the most profound of quotes, surely. When it starts working, that is.</Quote>
//             <Author>~Anonymous</Author>
//           </QuoteContainer>
//       </BoxWrapper>
//     );
// };

function convertTime(militaryTime){
    var timePeriod = "AM";
    var newTime = militaryTime;
    var hours = militaryTime.split(":")[0];
    var minutes = militaryTime.split(":")[1];
    if (parseInt(hours, 10) > 12) {
        hours -= 12;
        newTime = hours.toString() + ":" + minutes;
        timePeriod = "PM";
    }
    return newTime;
}
function convertTimePeriod(militaryTime){
    var timePeriod = "AM";
    var newTime = militaryTime;
     
    if (parseInt(militaryTime.split(":")[0], 10) > 12) {
      newTime -= 12;
      timePeriod = "PM";
    }
    return timePeriod;
}

function monthString(monthNum){
    if (monthNum == 1){
        return "January"
    }
    if (monthNum == 2){
        return "February"
    }
    if (monthNum == 3){
        return "March"
    }
    if (monthNum == 4){
        return "April"
    }
    if (monthNum == 5){
        return "May"
    }
    if (monthNum == 6){
        return "June"
    }
    if (monthNum == 7){
        return "July"
    }
    if (monthNum == 8){
        return "August"
    }
    if (monthNum == 9){
        return "September"
    }
    if (monthNum == 10){
        return "October"
    }
    if (monthNum == 11){
        return "November"
    }
    if (monthNum == 12){
        return "December"
    }
}

class DateAndQuote extends Component {
    state = {
        loading: true,
        time: null,
        timePeriod: null,
        year: null,
        month: null,
        day: null
      };
    
    async componentDidMount() {
        var timeURL = "http://worldclockapi.com/api/json/est/now"
        const response = await fetch(timeURL);
        const data = await response.json();
        var tempDT = data.currentDateTime.split("T");
        var tempT = tempDT[1].split("-");
        var milTime = tempT[0];
        var curTime= convertTime(milTime);
        var curTP = convertTimePeriod(milTime);
        var tempD = tempDT[0].split("-");
    
        this.setState({ time: curTime, timePeriod: curTP, year: tempD[0], month: monthString(tempD[1]), day: tempD[2], loading: false });
        console.log(data.currentDateTime);
    }  

    render() {
        // if (this.state.loading) {
        //   return <div>loading...</div>;
        // }
    
        // if (!this.state.time) {
        //   return <div>Didn't get any time. Try harder next time.</div>;
        // }
    
        return(
            <BoxWrapper>
                <Date>{this.state.month} {this.state.day}, {this.state.year}</Date>
                <TimeContainer>
                  <Time>{this.state.time}</Time>
                  <TimePeriod>{this.state.timePeriod}</TimePeriod>
                </TimeContainer>
                <QuoteContainer>
                  <Quote>This will be the most profound of quotes, surely. When it starts working.</Quote>
                  <Author>~Anonymous</Author>
                </QuoteContainer>
            </BoxWrapper>
          );
    }
    
}



export default DateAndQuote;