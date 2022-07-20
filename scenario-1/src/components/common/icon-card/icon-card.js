import React from 'react';
import { CardWrapper, IconWrapper, Text } from './icon-card.styled';

const IconCard = ({ icon, text }) => {
  return (
    <CardWrapper>
      <IconWrapper>{icon}</IconWrapper>
      <Text>{text}</Text>
    </CardWrapper>
  );
};

export default IconCard;
