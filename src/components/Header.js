import React from 'react';
import styled from "styled-components";
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';

const Header = () => {
    return ( 
        <HeaderContainer>
            <HeaderLogoStart />
            <HeaderTitle>my travel journal</HeaderTitle>
            <HeaderLogoEnd />
        </HeaderContainer>
    );
}
 
export default Header;

const HeaderContainer = styled.div`
    display: flex;
    background: #BF9270;
    margin: 5px;
    border-radius: 15px 15px 0px 0px;
    justify-content: center;
    align-items: center;

`;

const HeaderLogoStart = styled(FlightTakeoffIcon)`
    color: #FFEDDB;
`;

const HeaderLogoEnd = styled(FlightLandIcon)`
    color: #FFEDDB;
`;

const HeaderTitle = styled.h1`
    padding: 0px 20px;
    color: #FFEDDB;
`;

