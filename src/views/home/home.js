import { Hero } from 'components/common';
import React from 'react';
import {
  HomeWrapper,
  InputWrapper,
  StyledInput,
  StyledInputText,
} from './home.styled';

const Home = () => {
  return (
    <HomeWrapper>
      <InputWrapper>
        <StyledInputText>
          <p>Time for some food</p>
        </StyledInputText>
        <StyledInput
          onSearch={(value) => console.log(value)}
          size="large"
          placeholder="Enter your address"
          enterButton
        />
      </InputWrapper>
      <Hero />
    </HomeWrapper>
  );
};

export default Home;
