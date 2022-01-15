import React from 'react';
import * as style from 'components/pages/home/Style';
import TimeDealData from 'components/pages/home/data/timeDeal.json';
import TimeDeal from 'components/pages/home/components/TimeDeal';
import SectionHeader from './components/SectionHeader';

export default function Home() {
  return (
    <style.HomeContainer>
      <style.OriginalInitialRenderingSections>
        <SectionHeader path="/time-deal?type=klass" title="오늘의 특가! TIME DEAL" />
        <style.SwiperContainer>
          {TimeDealData.time_deal.map((data) => (
            <TimeDeal key={data.id} data={data} />
          ))}
        </style.SwiperContainer>
      </style.OriginalInitialRenderingSections>

      <style.OriginalInitialRenderingSections>
        <SectionHeader path="" title="MD 추천 클래스" />
        <style.SwiperContainer>잠시</style.SwiperContainer>
      </style.OriginalInitialRenderingSections>

      <style.OriginalInitialRenderingSections>
        <SectionHeader path="/events?index=0&onGoingOnly=true&status=ENTIRE" title="진행중인 인기 이벤트" />
        <style.SwiperContainer>잠시</style.SwiperContainer>
      </style.OriginalInitialRenderingSections>

      <style.OriginalInitialRenderingSections>
        <SectionHeader path="/products/preview/list" title="오픈 예정 클래스" />
        <style.SwiperContainer>잠시</style.SwiperContainer>
      </style.OriginalInitialRenderingSections>
    </style.HomeContainer>
  );
}
