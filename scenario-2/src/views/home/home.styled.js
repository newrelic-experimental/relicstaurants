import styled from 'styled-components';
import { Input } from 'antd';

export const HomeWrapper = styled.div`
  height: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: ${({ theme: { color } }) => color.mainYellow};
  padding: 45px 10px;
`;

export const StyledInputText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  font-size: ${({ theme: { fontSize } }) => fontSize.xxl};
  font-weight: 100;

  p {
    margin: 0;
    padding-bottom: 5px;
  }
`;

export const StyledInput = styled(Input.Search)`
  width: 400px;
`;
