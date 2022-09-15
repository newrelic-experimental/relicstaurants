import axios from 'axios';
import { useQuery } from 'react-query';
import { Collapse, Form, Rate, Slider } from 'antd';

import { Select } from 'antd';
import { useState } from 'react';
import { getFilterData } from './utils/getFIlteredData';
import {
  CardsWrapper,
  FiltersWrapper,
  RestaurantCard,
  RestaurantsViewWrapper,
} from './elements';
import { Message } from 'components/common';

const Restaurants = () => {
  const [filters, setFilters] = useState({
    rating: 0,
    prices: 0,
    cuisine: undefined,
  });

  const { Panel } = Collapse;
  const [form] = Form.useForm();

  const getRestaurants = async () => {
    const { data } = await axios.get('http://lvh.me:3001/api/restaurants');
    return data;
  };
  const { data } = useQuery('restaurants', getRestaurants);

  const filteredData = getFilterData(data, filters);

  const selectList = (data) => {
    const list = data
      ?.map(({ cuisine }) => cuisine)
      .filter((x, i, a) => {
        return a.indexOf(x) === i;
      });

    const options =
      list?.map((value) => ({
        value: value,
        label: value,
      })) || [];

    return options;
  };

  return (
    <RestaurantsViewWrapper>
      <FiltersWrapper>
        <Form
          form={form}
          onValuesChange={() => {
            setFilters(form.getFieldsValue(true));
          }}
          initialValues={{ rating: 0, prices: 0, cuisine: '' }}
        >
          <Collapse>
            <Panel header="Filter by score" key="1">
              <Form.Item name="rating">
                <Rate />
              </Form.Item>
            </Panel>
            <Panel header="Filter by prices" key="2">
              <Form.Item name="prices">
                <Slider max={5} defaultValue={0} />
              </Form.Item>
            </Panel>
            <Panel header="Filter by cuisine" key="3">
              <Form.Item name="cuisine">
                <Select options={selectList(data)} allowClear />
              </Form.Item>
            </Panel>
          </Collapse>
        </Form>
      </FiltersWrapper>
      <CardsWrapper>
        {filteredData?.length > 0 ? (
          filteredData?.map((item) => {
            return (
              <RestaurantCard
                name={item.name}
                id={item.id}
                score={item.rating}
                cuisine={item.cuisine}
                price={item.price}
              />
            );
          })
        ) : (
          <Message>Nothing was found</Message>
        )}
      </CardsWrapper>
    </RestaurantsViewWrapper>
  );
};

export default Restaurants;
