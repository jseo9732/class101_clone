import React from 'react';
import * as style from './HeaderStyle';

export default function Header() {
  return (
    <style.HeaderContainer>
      <style.HeaderBox>
        <style.Logo to="/">CLASS101</style.Logo>
        <style.NavContainer>
          <style.Nav to="/" marginRight="16px">
            클래스
          </style.Nav>
          <style.Nav to="/store">스토어</style.Nav>
        </style.NavContainer>
        <style.SearchForm>
          <style.SearchInput placeholder="찾으시는 취미가 있으신가요?" />
          <style.SearchBtn>
            <i className="fas fa-search SearchBtnImg"></i>
          </style.SearchBtn>
        </style.SearchForm>
        <style.AuthNavContainer>
          <style.AuthNav to="/creator">크리에이터 지원</style.AuthNav>
          <style.AuthNav to="/business">기업교육</style.AuthNav>
          <style.AuthNav to="login" marginRight="0px">
            로그인
          </style.AuthNav>
        </style.AuthNavContainer>
      </style.HeaderBox>
    </style.HeaderContainer>
  );
}
