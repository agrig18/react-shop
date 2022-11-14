import { ThemeColors } from "utils/theme";
import styled from "styled-components";

export const SProductTitle = styled.p`
  font-weight: 300;
  font-size: 18px;
  color: ${(props) => ThemeColors[props.theme.mode]["s_card_title"]};
`;

export const SProductPrice = styled.span`
  font-weight: 600;
  font-size: 18px;
  color: ${(props) => ThemeColors[props.theme.mode]["s_card_title"]};
`;

export const SCardItemButton = styled.button`
  display: none;
  position: absolute;
  left: 260px;
  bottom: -26px;
  background-color: ${(props) =>
    ThemeColors[props.theme.mode]["s_card_cart_button"]};
  border: none;
  height: 52px;
  width: 52px;
  padding: 15px 10px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 5px 10px 18px rgba(168, 172, 176, 0.19);
  transition-duration: 0.4s;

  :hover {
    background-color: ${(props) =>
      ThemeColors[props.theme.mode]["s_card_cart_button_hover"]};
  }
`;

export const SCard = styled.div`
  padding: 16px;

  a {
    text-decoration: none;
  }

  .product_image_wrapper {
    position: relative;
  }

  .product_image {
    width: 330px;
    height: 300px;
    object-fit: contain;
    opacity: ${(props) => (props.inStock ? 1 : 0.5)};
  }

  .out_of_stock {
    display: ${(props) => (props.inStock ? "none" : "block")};
    position: absolute;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 160%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    text-transform: uppercase;
    color: ${(props) => ThemeColors[props.theme.mode]["s_out_of_stock_title"]};
  }

  :hover {
    border-style: solid;
    border-width: 1px;
    color: ${(props) => ThemeColors[props.theme.mode]["s_card_border_hover"]};
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }

  :hover ${SCardItemButton} {
    display: inline-block;
  }

  ${SProductTitle} {
    color: ${(props) =>
      props.inStock
        ? ThemeColors[props.theme.mode]["s_card_title"]
        : ThemeColors[props.theme.mode]["s_card_title_out_of_stock"]};
  }

  ${SProductPrice} {
    color: ${(props) =>
      props.inStock
        ? ThemeColors[props.theme.mode]["s_card_title"]
        : ThemeColors[props.theme.mode]["s_card_title_out_of_stock"]};
  }
`;
