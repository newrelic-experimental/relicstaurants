import { Rate } from 'antd';
import React from 'react';
import {
  Card,
  RestaurantName,
  RestaurantPhoto,
  ScoreAndPrice,
} from './restaurant-card.styled';

const RestaurantCard = ({ name, id, score, cuisine, price }) => {
  return (
    <>
      <Card key={id} onClick={() => console.log({ id })}>
        <RestaurantName>{name}</RestaurantName>
        <RestaurantPhoto
          alt={name}
          src={require(`./../../../../assets/images/restaurants/${id}.jpg`)}
        />
        <ScoreAndPrice>
          <p>{cuisine}</p>
          <p>prices: {price}</p>
          <Rate disabled value={score} />
        </ScoreAndPrice>
      </Card>
    </>
  );
};

export default RestaurantCard;
