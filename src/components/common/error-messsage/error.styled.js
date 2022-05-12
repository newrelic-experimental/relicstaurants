import styled from 'styled-components';

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.color.red};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;
