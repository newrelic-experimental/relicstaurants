import { Button, Divider, Rate, Table } from 'antd';
import axios from 'axios';
import { ViewWrapper } from 'components/common';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import {
  RestaurantData,
  RestaurantHead,
  RestaurantImage,
} from './single-restaurant.styled';

const SingleRestaurant = () => {
  const { id } = useParams();

  const getRestaurant = async () => {
    const { data } = await axios.get(
      `http://localhost:3000/api/restaurant/${id}`
    );
    return data;
  };
  const { data } = useQuery('restaurants', getRestaurant);

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'price', dataIndex: 'price', key: 'price' },
    {
      title: 'Add to cart',
      render: (a, b, c) => <Button onClick={() => console.log(a)}>Add</Button>,
    },
  ];

  return (
    <ViewWrapper>
      <RestaurantHead>
        <RestaurantImage
          alt={data.name}
          src={require(`./../../assets/images/restaurants/${id}.jpg`)}
        />
        <RestaurantData>
          <h1>{data.name}</h1>
          <Rate value={data.rating} disabled />
          <p>{data.description}</p>
          <p>You can find us at {data.location}</p>
        </RestaurantData>
      </RestaurantHead>
      <Divider />
      <h4>Menu</h4>
      <Table
        dataSource={data.menuItems}
        columns={columns}
        style={{ width: '100%' }}
      />
    </ViewWrapper>
  );
};

export default SingleRestaurant;
