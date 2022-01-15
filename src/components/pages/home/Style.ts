import styled from 'styled-components';

export const HomeContainer = styled.div``;

export const OriginalInitialRenderingSections = styled.div`
  max-width: 1176px;
  margin: 0 auto;
  margin-top: 72px;
`;

export const SwiperContainer = styled.div`
  position: relative;
`;

export const SwipeBtnL = styled.button`
  width: 40px;
  height: 46px;
  position: absolute;
  border-radius: 3px;
  transition: background-color 0.1s ease 0s;
  border: 0;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  display: inline-flex;
  top: calc((100% - 172px) / 2);
  transform: translateY(-50%) translateX(-52px);
  &:hover {
    background-color: rgb(248, 248, 249);
  }
  &.disabled {
    display: none;
  }
`;

export const SwipeBtnR = styled(SwipeBtnL)`
  right: 0px;
  transform: translateY(-50%) translateX(52px);
`;

export const SwiperBox = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 1;
  margin-top: 24px;
  display: grid;
  column-gap: 24px;
  grid-template-columns: repeat(10, 1fr);
`;
