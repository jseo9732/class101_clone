import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;
  align-items: flex-end;
`;

export const HeaderTitle = styled(Link)`
  font-family: 'Pretendard-B';
  font-size: 24px;
  color: rgb(26, 26, 26);
  line-height: 34px;
  letter-spacing: 1px;
  text-decoration: none;
  &.disabled {
    pointer-events: none;
    cursor: none;
  }
`;

export const HeaderAllBtn = styled(Link)`
  font-family: 'Pretendard-B';
  font-size: 14px;
  line-height: 20px;
  color: rgb(162, 162, 162);
  text-decoration: none;
  letter-spacing: 1px;
  &:hover {
    color: rgb(202, 202, 202);
    transition: color 0.1s ease 0s;
    text-decoration: underline;
  }
`;
