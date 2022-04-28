import axios from 'axios';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router';
import { Collapse } from 'antd';
import {
  CardsWrapper,
  FiltersWrapper,
  RestaurantCard,
  RestaurantsViewWrapper,
} from 'components/common';
import { Rate } from 'antd';

const Restaurants = () => {
  const location = useLocation();
  const { Panel } = Collapse;

  const getRestaurants = async () => {
    const { data } = await axios.get('http://localhost:3000/api/restaurant');
    return data;
  };

  const { data } = useQuery('restaurants', getRestaurants);

  return (
    <RestaurantsViewWrapper>
      <FiltersWrapper>
        <Collapse>
          <Panel header="Filter by score" key="1">
            <p>filtr 1</p>
          </Panel>
          <Panel header="Filter by prices" key="2">
            <p>filtr 2</p>
          </Panel>
          <Panel header="Filter by cuisine" key="3">
            <p>filtr 3</p>
          </Panel>
        </Collapse>
      </FiltersWrapper>
      <CardsWrapper>
        {data?.map((item) => {
          console.log({ item });
          return (
            <RestaurantCard
              name={item.name}
              id={item.id}
              score={item.rating}
              cuisine={item.cuisine}
              price={item.price}
            />
          );
        })}
      </CardsWrapper>
    </RestaurantsViewWrapper>
  );
};

export default Restaurants;
