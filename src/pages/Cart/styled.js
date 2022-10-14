import styled from "styled-components";
import { ThemeColors } from "utils/theme";

export const SCartPageWrapper = styled.div`
  padding: 28px 100px;
  margin-top: ${(props) => props.className === "empty-cart" && "100px"};
`;

export const SBorder = styled.div`
  background: ${(props) => ThemeColors[props.theme.mode]["s_cart_border"]};
  width: 100%;
  height: 1px;
  margin-bottom: 24px;
  margin-top: 24px;
`;

export const SCartTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: ${(props) => ThemeColors[props.theme.mode]["s_cart_title"]};
  text-transform: uppercase;
`;
