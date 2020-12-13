//component for links to courseworks, lionmail, etc

import React from 'react';
import styled from 'styled-components';
//import { MobileAndTablet, Desktop } from 'react-responsive-simple';

const LinkBox = styled.a`
    margin-left: 4vw;
    margin-right: 4vw;
    margin-top: 1vw;
    padding: 1%;
    padding-bottom: .5%;
    width: 22vw;
    height: 3vw;
    background-color: #CAD8F3;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-content: top;
    text-decoration: none;
    transition: .4s;

    font-size: 2vw;
    font-weight: 700;
    color:black;
    text-transform: translate(0, 1vw);

    :hover{
        width: 24vw;
        height: 3.3vw;
        font-size: 2.2vw;
        color: #6805a6;
    }
`
const BoxWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    justify-content: center;
`


export const UsefulLinks = () => {
    return (
        <BoxWrapper>
            <LinkBox href="https://courseworks2.columbia.edu/">CourseWorks</LinkBox>
            <LinkBox href="https://library.columbia.edu/">Libraries</LinkBox>
            <LinkBox href="http://lionmail.columbia.edu/">LionMail</LinkBox>
            <LinkBox href="https://dining.columbia.edu/">Dining</LinkBox>
        </BoxWrapper>
    );
}
