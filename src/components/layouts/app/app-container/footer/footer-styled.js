import styled from 'styled-components';

export const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: ${({ theme: { color } }) => color.black};
  color: ${({ theme: { color } }) => color.silverLight};
`;
