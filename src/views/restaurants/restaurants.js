import React from 'react'
import { useLocation } from 'react-router';

const Restaurants = () => {
  const location = useLocation();
console.log(location)
  return (
    <div>Restaurants</div>
  )
}

export default Restaurants
