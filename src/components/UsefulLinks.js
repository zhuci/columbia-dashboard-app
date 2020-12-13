//component for links to courseworks, lionmail, etc

import React, { Component } from 'react';
import styled from 'styled-components';
//import { MobileAndTablet, Desktop } from 'react-responsive-simple';

const LinkBox = styled.div`
    
`

const IconTitle = styled.h1`
    
`

export const UsefulLinks = ({Link}) => {
    return (
        <LinkBox>
            <IconTitle>{Link}</IconTitle>
            <a href={Link}></a>
        </LinkBox>
    );
}
