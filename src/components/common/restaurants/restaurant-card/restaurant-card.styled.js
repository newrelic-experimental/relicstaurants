import styled from 'styled-components';

export const Card = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
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
  border-radius: 0px 0px 5px 5px;
`;

export const ScoreAndPrice = styled.div``;
