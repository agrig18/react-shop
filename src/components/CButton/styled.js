import styled, { css } from "styled-components";
import { ThemeColors } from "utils/theme";

export const SButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SButton = styled.button`
  cursor: pointer;

  &.counter {
    background: white;
    border: 1px solid #1d1f22;
    width: ${(props) => (props.id === "mini-cart" ? "24px" : "45px")};
    height: ${(props) => (props.id === "mini-cart" ? "24px" : "45px")};
    color: black;
  }

  &.order,
  &.add_to_cart,
  &.checkout {
    border: none;
    background: ${(props) =>
      ThemeColors[props.theme.mode]["s_order_add_to_cart_button"]};
    color: white;
    text-transform: uppercase;
    transition-duration: 0.4s;

    ${(props) => {
      switch (props.className) {
        case "order":
          return css`
            width: 279px;
            height: 43px;
            font-size: 14px;
            margin-top: 16px;
          `;
        case "add_to_cart":
          return css`
            cursor: ${(props) => props.disabled && "auto"};
            background: ${(props) =>
              props.disabled &&
              ThemeColors[props.theme.mode]["s_disabled_button"]};
            width: 292px;
            height: 52px;
            font-size: 16px;
            margin-top: 25px;
          `;
        case "checkout":
          return css`
            height: 43px;
            font-size: 14px;
          `;
        default:
          return css``;
      }
    }}
  }

  &.view-bag {
    height: 43px;
    font-size: 14px;
    border: 1px solid #1d1f22;
    background: #ffffff;
    color: #1d1f22;
    text-transform: uppercase;
    transition-duration: 0.5s;
  }

  &.order:hover,
  &.add_to_cart:hover,
  &.checkout:hover {
    background-color: ${(props) =>
      !props.disabled &&
      ThemeColors[props.theme.mode]["s_card_cart_button_hover"]};
  }

  &.view-bag:hover {
    background: ${(props) =>
      ThemeColors[props.theme.mode]["s_size_button_hover"]};
    color: ${(props) =>
      ThemeColors[props.theme.mode]["s_size_button_text_hover"]};
  }
`;

export const SSign = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
