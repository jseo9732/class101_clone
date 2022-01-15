import React from 'react';
import * as style from './SectionHeaderStyle';

interface IProps {
  path: string;
  title: string;
}

export default function SectionHeader({ path, title }: IProps) {
  return (
    <style.HeaderContainer>
      <style.HeaderTitle to={path} className={`${path ? '' : 'disabled'}`}>
        {title}
      </style.HeaderTitle>
      {path && <style.HeaderAllBtn to={path}>전체 클래스 보기</style.HeaderAllBtn>}
    </style.HeaderContainer>
  );
}
