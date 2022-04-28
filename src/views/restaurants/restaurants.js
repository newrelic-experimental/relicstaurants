import axios from 'axios';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router';

import {
  CardsWrapper,
  FiltersWrapper,
  RestaurantCard,
  RestaurantsViewWrapper,
} from 'components/common';

const Restaurants = () => {
  const location = useLocation();

  const getRestaurants = async () => {
    const { data } = await axios.get('http://localhost:3000/api/restaurant');
    return data;
  };

  const { data } = useQuery('restaurants', getRestaurants);

  return (
    <RestaurantsViewWrapper>
      <FiltersWrapper>
        <p>filter 1</p>
        <p>filter 2</p>
      </FiltersWrapper>
      <CardsWrapper>
        {data?.map((item) => {
          console.log({ item });
          return (
            <RestaurantCard name={item.name} id={item.id} score={item.rating} />
          );
        })}
      </CardsWrapper>
    </RestaurantsViewWrapper>
  );
};

export default Restaurants;
