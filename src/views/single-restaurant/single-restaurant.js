import React from 'react';
import { useParams } from 'react-router';

const SingleRestaurant = () => {
  const { id } = useParams();
  console.log(id);
  return <div>SingleRestaurant with id {id}</div>;
};

export default SingleRestaurant;
