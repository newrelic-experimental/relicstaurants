import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: ${({ theme: { color } }) => color.mainYellow};
  padding: 0 10px;
`;

export const Logo = styled.div`
  font-size: 40px;
  font-weight: 100;
  height: 94px;
  line-height: 1;
  margin-top: 15px;

  p {
    font-size: 14px;
    margin 0 0 0 200px;
    color: ${({ theme }) => theme.color.black};
  }
`;

export const NaviWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme: { fontSize } }) => fontSize.lg};
  width: 400px;
  padding-right: 50px;
`;

export const IconWrapper = styled.div`
  svg {
    color: ${({ theme }) => theme.color.mainPurple};
    font-size: 24px;
  }
`;
