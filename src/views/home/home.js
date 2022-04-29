import { Hero } from 'components/common';
import React from 'react';
import { useNavigate } from 'react-router';
import {
  HomeWrapper,
  InputWrapper,
  StyledInput,
  StyledInputText,
} from './home.styled';

const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeWrapper>
      <InputWrapper>
        <StyledInputText>
          <p>Time for some food</p>
        </StyledInputText>
        <StyledInput
          onSearch={(value) => {
            console.log(value);
            navigate('/restaurants', { state: value });
          }}
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
