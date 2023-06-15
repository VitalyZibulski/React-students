import React from 'react';

import { Image } from './styles/Image.styled';
import { Title } from './styles/Title.styled';
import { Text } from './styles/Text.styled';
import { Button } from './styles/Button.styled';
import { SimpleButton } from './styles/Button.styled';

const Card = () => {
  return (
    <div>
      <Image />
      <Title>Headline</Title>
      <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
      <Button>See more</Button>
      <SimpleButton>Save</SimpleButton>
    </div>
  );
};

export default Card;

