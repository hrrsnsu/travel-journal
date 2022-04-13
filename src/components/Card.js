import React from 'react';
import styled from "styled-components";

const Card = (props) => {

    return (
        <CardContainer>
            <CardImage src={props.item.image}/>
            <CardInformation>
                    <p>{props.item.title}</p>
                    <h1>{props.item.location}</h1>
                    <p>{props.item.startDate} - {props.item.endDate}</p>
                    <p>{props.item.description}</p>
            </CardInformation>
        </CardContainer>
     );
}
 
export default Card;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
    background: #EDCDBB;
    margin: 5px;
    border-radius: 15px;
`;

const CardImage = styled.img`
    border-radius: 15px;
    width: 30%;
    max-height: 400px;
    margin: 10px;
`;

const CardInformation = styled.div`
    border-radius: 15px;
    margin: 10px;
    padding: 10px;
    font-size: small;
    width: 30%;
    background: white;
    display:flex;
    flex-direction: column;
    max-height: 400px;
`;

