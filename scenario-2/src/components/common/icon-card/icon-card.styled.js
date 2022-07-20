import styled from 'styled-components';

export const CardWrapper = styled.div`
  height: 180px;
  width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IconWrapper = styled.div`
  height: 80%;

  svg {
    width: 120px;
    height: 120px;
  }
`;

export const Text = styled.div`
  height: 20%;
  font-size: ${({ theme }) => theme.fontSize.xl};
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin: 0;
  }
`;
