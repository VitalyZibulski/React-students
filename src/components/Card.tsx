import React from 'react';
import CardImage from "../assets/image.png";
import {
    Title,
    Text,
    Button,
    SimpleButton,
    CardWrapper,
    ImageWrapper,
    ContentWrapper,
    Flex
} from './styles';

const Card = () => {
  return (
    <CardWrapper>
      <ImageWrapper>
       <img src={CardImage}/>
      </ImageWrapper>
      <ContentWrapper>
         <Title>Headline</Title>
         <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
         <Flex>
             <Button>See more</Button>
             <SimpleButton>Save</SimpleButton>
         </Flex>
      </ContentWrapper>
    </CardWrapper>
  );
};

export default Card;

