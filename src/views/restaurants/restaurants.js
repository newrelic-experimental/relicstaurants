import axios from 'axios';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router';
import { Card } from 'antd';
import { CardWrapper } from 'components/common';

const Restaurants = () => {
  const location = useLocation();

  const getRestaurants = async () => {
  const { data } = await axios.get('http://localhost:3000/api/restaurant');
  return data;
  }

const { data } = useQuery('restaurants', getRestaurants);

return (
  <CardWrapper>
    {data?.map((item)=>{
      console.log({item})
      return(
      <Card
      title={item.name}
      extra={<a href="#">More</a>}
      style={{ width: 300 }}
      bordered
      size="small"
      cover={<img alt="example" src={require(`./../../assets/images/restaurants/${item.id}.jpg`)}/>}
      >
    </Card>
    )}
    )}
  </CardWrapper>
  )
}

export default Restaurants
