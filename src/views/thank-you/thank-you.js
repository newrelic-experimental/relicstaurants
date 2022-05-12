import { Title, ViewWrapper } from 'components/common';
import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router';

const ThankYou = () => {
  const navigate = useNavigate();
  return (
    <ViewWrapper>
      <Title>Thank you for your Order!</Title>
      <p>
        Thank you for your Order, we will deliver Food how fast it's possible.{' '}
      </p>
      <Button type="primal" onClick={() => navigate('/')}>
        Back to main page
      </Button>
    </ViewWrapper>
  );
};

export default ThankYou;
