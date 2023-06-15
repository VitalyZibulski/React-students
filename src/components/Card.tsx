import React from 'react';

import { Title, Image, Text, Button, SimpleButton, CardWrapper, ImageWrapper } from './styles';

import styled from "styled-components";

export const BtnDiv = styled.div`  
   display: flex;
`

const Card = () => {
  return (
    <CardWrapper>
      <ImageWrapper>
       <Image />
      </ImageWrapper>
      <Title>Headline</Title>
      <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
     <BtnDiv>
      <Button>See more</Button>
      <SimpleButton>Save</SimpleButton>
     </BtnDiv>
    </CardWrapper>
  );
};

export default Card;