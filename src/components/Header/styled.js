import styled from "styled-components";
import { ThemeColors } from "utils/theme";

export const SHeader = styled.header`
  height: 80px;
  position: sticky;
  z-index: 99;
  top: 0;
  background-color: ${(props) =>
    ThemeColors[props.theme.mode]["s_app_header_bg"]};
`;
export const SHeaderWrapper = styled.div`
  /* width: 1440px; */
  /* max-width: 100%; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
`;

export const SLogo = styled.div``;

export const SIcons = styled.div`
  display: flex;
  position: relative;
`;

export const SCurrencyIconWrapper = styled.div`
  position: relative;
  /* width: 100%; */
`;

export const SCurrencyIcon = styled.div`
  font-family: "Raleway";
  font-weight: 600;
  font-style: normal;
  font-size: 18px;
  /* line-height: 28.8px; */
`;

export const SArrowIcon = styled.div`
  display: block;
  position: absolute;
  right: -15px;
  top: 2px;
`;

export const SDropDownContent = styled.div`
  display: block;
  position: absolute;
  background-color: ${(props) => ThemeColors[props.theme.mode]["s_dropdown"]};
  min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 3;
`;

export const SDropDown = styled.div`
  margin: 0 50px;

  button {
    padding-right: 25px;
    border: none;
    cursor: pointer;
    background-color: transparent;
  }
`;

export const SMiniCart = styled.div`
  position: relative;
  right: 70px;
`;

export const SMiniCartIcon = styled.div`
  cursor: pointer;

  img {
    position: absolute;
    right: -45px;
    bottom: 3px;
  }
`;

export const SMiniCartItemCounter = styled.div`
  position: absolute;
  text-align: center;
  height: 20px;
  width: 20px;
  color: ${(props) =>
    ThemeColors[props.theme.mode]["s_cart_icon_counter_inner"]};
  background-color: ${(props) =>
    ThemeColors[props.theme.mode]["s_cart_icon_counter_outer"]};
  right: -55px;
  bottom: 10px;
  border-radius: 50%;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
`;

export const SCartOverlay = styled.div`
  position: fixed;
  top: 80px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background: rgba(57, 55, 72, 0.22);
  z-index: 1;
`;
