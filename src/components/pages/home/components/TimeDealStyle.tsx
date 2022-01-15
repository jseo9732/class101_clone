import styled from 'styled-components';

export const SwiperSlide = styled.div`
  margin-right: 24px;
  width: 276px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const ThumbnailContainer = styled.div`
  border-radius: 3px;
  margin-bottom: 8px;
  width: 276px;
  height: 207px;
  position: relative;
`;

export const ThumbnailImg = styled.img`
  border-radius: 3px;
  width: 100%;
  height: 100%;
  object-fit: fill;
  /* overflow: hidden; */
  /* &:hover {
    transform: scale(2);
    transition: transform 0.3s ease 0s, opacity 0.1s linear 0s !important;
  } */
`;

export const CouponBox = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 6px 8px;
  border-radius: 2px;
  background-color: rgb(88, 32, 207);
  color: rgb(255, 255, 255);
  font-size: 11px;
  font-family: 'Pretendard-SemiBold';
  line-height: 16px;
  letter-spacing: normal;
  z-index: 3;
`;

export const LikeBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 0;
  width: 32px;
  height: 32px;
  background-color: transparent;
  transition: background-color 0.1s ease 0s;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const TimeEndBox = styled.div`
  margin-bottom: 8px;
  line-height: 1;
  display: flex;
  align-items: center;
  height: 20px;
  width: 100%;
  padding: 0 6px;
  border-radius: 3px;
  background-color: rgb(99, 0, 216);
`;

export const EndText = styled.span`
  margin-left: 3px;
  font-family: 'Pretendard-SemiBold';
  font-size: 9px;
  color: rgb(255, 255, 255);
  line-height: 12px;
  letter-spacing: 1px;
`;

export const EndTime = styled(EndText)`
  margin-left: auto;
`;

export const CreatorName = styled.div`
  font-size: 0.6875rem;
  line-height: 0.875rem;
  font-family: 'Pretendard-B';
  color: #000000;
  letter-spacing: 0.5px;
`;

export const classTitle = styled.div`
  font-size: 14px;
  font-family: 'Pretendard-R';
  line-height: 20px;
  letter-spacing: 0.3px;
  color: rgb(26, 26, 26);
  max-  height: 40px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 4px 0px 8px;
`;

export const CountContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CountBox = styled.div`
  font-size: 11px;
  font-family: 'Pretendard-R';
  line-height: 16px;
  letter-spacing: normal;
  margin: 0 8px 0 0;
  display: flex;
  align-items: center;
  color: rgb(162, 162, 162);
`;

export const CountText = styled.div`
  margin-left: 2px;
`;

export const Spacing = styled.div`
  flex: none;
  background-color: #fafafa;
  width: 100%;
  height: 1px;
  margin: 8px 0;
`;

export const PriceContainer = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const DiscountRate = styled.span`
  font-size: 0.8125rem;
  line-height: 1.125rem;
  font-family: 'Pretendard-B';
  color: #fd3049;
  margin-right: 4px;
`;

export const SalePrice = styled(DiscountRate)`
  color: #1a1a1a;
`;

export const Installment = styled.div`
  font-size: 0.6875rem;
  line-height: 0.875rem;
  font-family: 'Pretendard-R';
  color: #a2a2a2;
`;
