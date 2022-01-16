import React from 'react';
import * as style from './TimeDealStyle';
import { Icon, Colors, Card, Caption1, Badge, Divider, CoverRatio } from '@class101/ui';

interface IProps {
  data: IData;
}

interface IData {
  id: number;
  title: string;
  creator: string;
  img: string;
  like: number;
  thumsUp?: number; // 없을 시 null
  price: {
    originalPrice: number;
    salePrice: number;
    installment: number; // 할부 개월 수 // 0일 시 표시하지 않음
  };
  coupon?: number; // 없을 시 null // number만원 쿠폰
}

export default function MDRcmd({ data }: IProps) {
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
      <Card
        external
        to={'/'}
        title={title}
        coverImage={img}
        coverImageRatio={CoverRatio.RATIO_3X4}
        extraTop={
          <Caption1 fontWeight={700} color={Colors.black}>
            {creator}
          </Caption1>
        }
        extraBottom={
          <div style={{ marginLeft: '-4px', lineHeight: '0' }}>
            <Badge
              icon={<Icon.Heart fillColor={Colors.gray400} />}
              backgroundColor="transparent"
              color={Colors.gray400}
              size="sm"
            >
              {like}
            </Badge>
            {thumsUp != 0 && thumsUp && (
              <Badge
                icon={<Icon.Like fillColor={Colors.gray400} />}
                backgroundColor="transparent"
                color={Colors.gray400}
                size="sm"
              >
                {thumsUp}%
              </Badge>
            )}
          </div>
        }
      >
        <div style={{ marginTop: 8, marginBottom: 8 }}>
          <Divider color="#FAFAFA" />
        </div>
        <style.PriceContainer>
          {DiscountRate != 0 && (
            <Caption1 fontWeight={700} color={Colors.red500}>
              {DiscountRate}%
            </Caption1>
          )}
          <Caption1 fontWeight={700} color={Colors.gray900}>
            월{InstallmentPayment}원
          </Caption1>
          <Caption1 fontWeight={700} color={Colors.gray600}>
            ({installment}개월)
          </Caption1>
        </style.PriceContainer>
      </Card>
    </style.SwiperSlide>
  );
}
