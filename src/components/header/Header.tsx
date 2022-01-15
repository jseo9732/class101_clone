import React from 'react';
import * as style from './HeaderStyle';
import { Icon } from '@class101/ui';

export default function Header() {
  return (
    <>
      <style.HeaderContainer>
        <style.HeaderBox>
          <style.Logo to="/">CLASS101</style.Logo>
          <style.NavContainer>
            <style.Nav to="/" margin_right="16px">
              클래스
            </style.Nav>
            <style.Nav to="/store">스토어</style.Nav>
          </style.NavContainer>
          <style.SearchForm>
            <style.SearchInput placeholder="찾으시는 취미가 있으신가요?" />
            <style.SearchBtn>
              <Icon.Search size={20} />
            </style.SearchBtn>
          </style.SearchForm>
          <style.AuthNavContainer>
            <style.AuthNav to="/creator">크리에이터 지원</style.AuthNav>
            <style.AuthNav to="/business">기업교육</style.AuthNav>
            <style.AuthNav to="login" margin_right="0px">
              로그인
            </style.AuthNav>
          </style.AuthNavContainer>
        </style.HeaderBox>
      </style.HeaderContainer>
      <style.CategoryContainer>
        <style.CategoryBar>
          <style.CategoryTab margin_right="32px">
            전체 카테고리
            <Icon.DropDown size={24} />
          </style.CategoryTab>
          <style.CategoryTab>1월 가입 혜택</style.CategoryTab>
          <style.CategoryTab>이벤트</style.CategoryTab>
          <style.CategoryTab>바로 수강</style.CategoryTab>
          <style.CategoryTab>신규 클래스</style.CategoryTab>
          <style.CategoryTab>오픈 예정</style.CategoryTab>
          <style.CategoryTab2Container>
            <style.CategoryTab2>시그니처</style.CategoryTab2>
            <style.CategoryTab2>키즈</style.CategoryTab2>
            <style.CategoryTab2>원포인트 클래스</style.CategoryTab2>
          </style.CategoryTab2Container>
        </style.CategoryBar>
      </style.CategoryContainer>
    </>
  );
}
