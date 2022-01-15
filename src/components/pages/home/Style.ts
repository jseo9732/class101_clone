import styled from 'styled-components';

export const HomeContainer = styled.div``;

export const OriginalInitialRenderingSections = styled.div`
  max-width: 1176px;
  width: 100%;
  margin: 0 auto;
  margin-top: 72px;
`;

export const SwiperContainer = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 1;
  margin-top: 24px;
  display: grid;
  column-gap: 24px;
  grid-template-columns: repeat(10, 1fr);
`;
