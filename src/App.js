import React from "react";
import Header from "../src/components/Header";
import Card from "../src/components/Card"
import styled from "styled-components";
import {locations} from "./data";

export default function App(){

  const cards = locations.map(item=> {
    return (
      <Card item={item}/>
    )
  })

  return (
    <Wrapper>
      <Header/>
        <section>
          {cards}
        </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  
`;