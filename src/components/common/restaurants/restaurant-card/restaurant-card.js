import { Rate } from 'antd';
import React from 'react';
import {
  Card,
  RestaurantName,
  RestaurantPhoto,
} from './restaurant-card.styled';

const RestaurantCard = ({ name, id, score }) => {
  return (
    <>
      <Card key={id} onClick={() => console.log({ id })}>
        <RestaurantName>{name}</RestaurantName>
        <RestaurantPhoto
          alt={name}
          src={require(`./../../../../assets/images/restaurants/${id}.jpg`)}
        />
        <Rate value={score} />
      </Card>
    </>
  );
};

export default RestaurantCard;
