import React from 'react';
import * as style from 'components/pages/home/Style';
import TimeDealData from 'components/pages/home/data/timeDeal.json';
import TimeDeal from 'components/pages/home/components/TimeDeal';
import MDRcmdData from 'components/pages/home/data/mdRecommend.json';
import MDRcmd from './components/MDRcmd';
import SectionHeader from './components/SectionHeader';
import { Icon } from '@class101/ui';

export default function Home() {
  return (
    <style.HomeContainer>
      <style.OriginalInitialRenderingSections>
        <SectionHeader path="/time-deal?type=klass" title="오늘의 특가! TIME DEAL" />
        <style.SwiperContainer>
          <style.SwipeBtnL onClick={slide_L}>
            <Icon.ChevronLeft size={24} />
          </style.SwipeBtnL>
          <style.SwiperBox id="swiper">
            {TimeDealData.time_deal.map((data) => (
              <TimeDeal key={data.id} data={data} />
            ))}
          </style.SwiperBox>
          <style.SwipeBtnR onClick={slide_R}>
            <Icon.ChevronRight size={24} />
          </style.SwipeBtnR>
        </style.SwiperContainer>
      </style.OriginalInitialRenderingSections>

      <style.OriginalInitialRenderingSections>
        <SectionHeader path="" title="MD 추천 클래스" />
        <style.SwiperContainer>
          <style.SwipeBtnL onClick={slide_L}>
            <Icon.ChevronLeft size={24} />
          </style.SwipeBtnL>
          <style.SwiperBox id="swiper">
            {MDRcmdData.md_recommend.map((data) => (
              <MDRcmd key={data.id} data={data} />
            ))}
          </style.SwiperBox>
          <style.SwipeBtnR onClick={slide_R}>
            <Icon.ChevronRight size={24} />
          </style.SwipeBtnR>
        </style.SwiperContainer>
      </style.OriginalInitialRenderingSections>

      <style.OriginalInitialRenderingSections>
        <SectionHeader path="/events?index=0&onGoingOnly=true&status=ENTIRE" title="진행중인 인기 이벤트" />
        <style.SwiperBox>잠시</style.SwiperBox>
      </style.OriginalInitialRenderingSections>

      <style.OriginalInitialRenderingSections>
        <SectionHeader path="/products/preview/list" title="오픈 예정 클래스" />
        <style.SwiperBox>잠시</style.SwiperBox>
      </style.OriginalInitialRenderingSections>
    </style.HomeContainer>
  );
}

const slide_L = () =>
  document.getElementById('swiper')?.scrollBy({
    top: 0,
    left: -300,
    behavior: 'smooth',
  });

const slide_R = () =>
  document.getElementById('swiper')?.scrollBy({
    top: 0,
    left: 300,
    behavior: 'smooth',
  });
