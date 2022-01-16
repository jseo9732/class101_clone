import React from 'react';
import * as style from 'components/pages/home/components/TimeDealStyle';
import { Icon, Colors } from '@class101/ui';

interface IProps {
  data: IData;
}

interface IData {
  id: number;
  title: string;
  creator: string;
  img: string;
  like: number;
  thumsUp: number; // 없을 시 null
  price: {
    originalPrice: number;
    salePrice: number;
    installment: number; // 할부 개월 수 // 0일 시 표시하지 않음
  };
  coupon: number; // 없을 시 null // number만원 쿠폰
}

export default function TimeDeal({ data }: IProps) {
  const {
    id,
    title,
    creator,
    img,
    like,
    thumsUp,
    price: { originalPrice, salePrice, installment },
    coupon,
  } = data;
  const DiscountRate = Math.floor(((originalPrice - salePrice) / originalPrice) * 100);
  const InstallmentPayment = (salePrice / installment).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  return (
    <style.SwiperSlide>
      <style.ThumbnailContainer>
        <style.ThumbnailImg src={img} />
        <style.CouponBox>{coupon}만원 쿠폰</style.CouponBox>
        <style.LikeBtn>
          <Icon.HeartOutline size={24} fillColor={Colors.white} />
        </style.LikeBtn>
      </style.ThumbnailContainer>
      <div>
        <style.TimeEndBox>
          <Icon.TimerOutline size={13} fillColor={Colors.white} />
          <style.EndText>타임딜 종료까지</style.EndText>
          <style.EndTime>00:00:00</style.EndTime>
        </style.TimeEndBox>
        <style.CreatorName>{creator}</style.CreatorName>
        <style.classTitle>{title}</style.classTitle>
        <style.CountContainer>
          <style.CountBox>
            <Icon.Heart size={9} fillColor={Colors.gray400} />
            <style.CountText>{like}</style.CountText>
          </style.CountBox>
          <style.CountBox>
            <Icon.Like size={9} fillColor={Colors.gray400} />
            <style.CountText>{thumsUp}%</style.CountText>
          </style.CountBox>
        </style.CountContainer>
        <style.Spacing></style.Spacing>
        <style.PriceContainer>
          <style.DiscountRate>{DiscountRate}%</style.DiscountRate>
          <style.SalePrice>월 {InstallmentPayment}원</style.SalePrice>
          <style.Installment>({installment}개월)</style.Installment>
        </style.PriceContainer>
      </div>
    </style.SwiperSlide>
  );
}
