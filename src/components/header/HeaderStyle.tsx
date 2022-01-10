import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 86px;
  display: flex;
  align-items: center;
  box-shadow: rgb(232 232 232) 0px -1px 0px inset;
  /* border-bottom */
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

export const Nav = styled(NavLink)<{ marginRight?: string }>`
  font-family: 'Pretendard-B';
  font-size: 1.25rem;
  line-height: 1.625rem;
  letter-spacing: 3px;
  color: #1a1a1a;
  margin-right: ${(props) => props.marginRight};
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
  margin: 0 px;
  width: 100%;
  padding: 12px 52px 12px 16px;
  background: rgb(248, 248, 249);
  border: 1px solid rgb(248, 248, 249);
  border-radius: 24px;
  text-align: left;
  color: rgb(26, 26, 26);
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

export const AuthNav = styled(Link)<{ marginRight?: string }>`
  font-family: 'Pretendard-L';
  font-weight: normal;
  font-size: 100%;
  color: #1a1a1a;
  line-height: 20px;
  letter-spacing: -0.15px;
  margin-right: ${(props) => props.marginRight || '24px'};
  text-decoration: none;
`;
