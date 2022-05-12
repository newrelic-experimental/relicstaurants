import { ErrorMessage, Hero } from 'components/common';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  HomeWrapper,
  InputWrapper,
  StyledInput,
  StyledInputText,
} from './home.styled';

const Home = () => {
  const navigate = useNavigate();
  const [errorInValidation, setErrorInValidation] = useState();

  return (
    <HomeWrapper>
      <InputWrapper>
        <StyledInputText>
          <p>Time for some food</p>
        </StyledInputText>
        <StyledInput
          onChange={(e) => {
            if (e.target.value.length >= 5) setErrorInValidation(false);
          }}
          onSearch={(value) => {
            if (value.length >= 5) {
              localStorage.setItem('address', value);
              navigate('/restaurants', { state: value });
            } else {
              setErrorInValidation(true);
            }
          }}
          size="large"
          placeholder="Enter your address"
          enterButton
        />
        {errorInValidation && (
          <ErrorMessage>
            Address should be at least 5 characters long
          </ErrorMessage>
        )}
      </InputWrapper>
      <Hero />
    </HomeWrapper>
  );
};

export default Home;
