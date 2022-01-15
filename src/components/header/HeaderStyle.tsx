import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 86px;
  display: flex;
  align-items: center;
  /* box-shadow: rgb(232 232 232) 0px -1px 0px inset; */
`;

export const HeaderBox = styled.div`
  max-width: 1176px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const Logo = styled(Link)`
  font-family: 'Pretendard-Black';
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0px;
  color: #000000;
  margin-right: 24px;
  text-decoration: none;
`;

export const NavContainer = styled.div`
  display: flex;
  margin-right: 36px;
`;

export const Nav = styled(NavLink)<{ margin_right?: string }>`
  font-family: 'Pretendard-B';
  font-size: 1.25rem;
  line-height: 1.625rem;
  letter-spacing: 3px;
  color: #1a1a1a;
  margin-right: ${(props) => props.margin_right};
  text-decoration: none;
  &.active {
    color: #ff5600;
  }
`;

export const SearchForm = styled.form`
  width: 420px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const SearchInput = styled.input`
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: -0.15px;
  width: 100%;
  padding: 12px 52px 12px 16px;
  background: rgb(248, 248, 249);
  border: 1px solid rgb(248, 248, 249);
  border-radius: 24px;
  text-align: left;
  color: rgb(26, 26, 26);
  outline: 0;
`;

export const SearchBtn = styled.button`
  background-color: transparent;
  position: absolute;
  right: 16px;
  cursor: pointer;
  top: calc(50% - 10px);
  width: 20px;
  height: 20px;
  border: 0px;
  font-size: 20px;
`;

export const AuthNavContainer = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
`;

export const AuthNav = styled(Link)<{ margin_right?: string }>`
  font-family: 'Pretendard-L';
  font-size: 100%;
  color: #1a1a1a;
  line-height: 20px;
  letter-spacing: -0.15px;
  margin-right: ${(props) => props.margin_right || '24px'};
  text-decoration: none;
`;

export const CategoryContainer = styled(HeaderContainer)`
  height: 52px;
  box-shadow: rgb(239 239 239) 0px -1px 0px inset;
`;

export const CategoryBar = styled(HeaderBox)`
  max-width: 1176px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;

  /* position: relative; */
  /* background-color: rgb(255, 255, 255); */
  /* overflow: auto; */
`;

export const CategoryTab = styled.div<{ margin_right?: string }>`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 2px;
  margin: 0 28px 0 0;
  display: flex;
  position: relative;
  align-items: center;
  font-family: 'Pretendard-B';
  padding: 8px 0 20px;
  cursor: pointer;
  color: rgb(26, 26, 26);
  margin-right: ${(props) => props.margin_right || '28px'};
  &:hover {
    &:after {
      content: '';
      background-color: rgb(26, 26, 26);
      position: absolute;
      bottom: 10px;
      left: 0px;
      width: 100%;
      height: 2px;
      z-index: 999;
    }
  }
`;

export const CategoryTab2Container = styled.div`
  display: flex;
  margin-left: 30px;
`;

export const CategoryTab2 = styled(CategoryTab)`
  font-family: 'Pretendard-R';
  &:hover {
    font-family: 'Pretendard-B';
  }
`;
