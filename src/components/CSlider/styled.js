import styled from "styled-components";

export const SSlider = styled.div`
  width: ${(props) => (props.className === "mini-cart" ? "100px" : "200px")};
  height: 100%;
  position: relative;
`;

export const SSlide = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  transition: opacity ease-in-out 0.4s;

  &.active {
    opacity: 1;
  }

  img {
    border: 1px solid #1d1f22;
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }
`;

export const SSliderButtons = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  bottom: 16px;
  right: 16px;
`;
