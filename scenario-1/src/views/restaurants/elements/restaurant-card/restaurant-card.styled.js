import styled from 'styled-components';

export const Card = styled.div`
  width: 24%;
  border-radius: 5px;
  margin: 5px;
  border: 1px solid ${({ theme }) => theme.color.silver};
  color: ${({ theme }) => theme.color.mainPurple};
  cursor: pointer;

  :hover {
    box-shadow: ${({ theme }) => theme.boxShadow.dp_3};
  }
`;

export const RestaurantName = styled.div`
  font-size: ${({ theme }) => theme.fontSize.sm};
  padding: 15px 5px;
  text-align: center;
`;

export const RestaurantPhoto = styled.img`
  width: 254px;
  height: 170px;
`;

export const ScoreAndPrice = styled.div`
  padding: 5px 10px;

  p {
    font-size: ${({ theme }) => theme.fontSize.xs};
    margin: 0;
  }
`;
