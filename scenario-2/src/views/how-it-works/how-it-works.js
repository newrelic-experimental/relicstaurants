import { IconsWrapper, Title, ViewWrapper } from 'components/common';
import IconCard from 'components/common/icon-card/icon-card';
import React from 'react';
import {
  ShoppingCartOutlined,
  UnorderedListOutlined,
  CarOutlined,
} from '@ant-design/icons';

const HowItWorks = () => {
  return (
    <ViewWrapper>
      <Title>How it works?</Title>
      <IconsWrapper>
        <IconCard icon={<ShoppingCartOutlined />} text="You order" />
        <IconCard icon={<UnorderedListOutlined />} text="We take the order" />
        <IconCard icon={<CarOutlined />} text="We deliver food" />
      </IconsWrapper>
    </ViewWrapper>
  );
};

export default HowItWorks;
