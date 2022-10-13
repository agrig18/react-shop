import styled, { css } from "styled-components";
import { ThemeColors } from "utils/theme";

export const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SRadioButtonWrapper = styled.div`
  position: relative;
  display: block;
`;

export const SRadioButtonLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  min-width: ${(props) => (props.id === "mini-cart" ? "24px" : "63px")};
  height: ${(props) => (props.id === "mini-cart" ? "24px" : "45px")};
  font-family: "Source Sans Pro";
  font-weight: 400;
  font-size: ${(props) => (props.id === "mini-cart" ? "14px" : "16px")};
  background: ${(props) => ThemeColors[props.theme.mode]["s_size_button"]};
  border: 1px solid #1d1f22;
  color: ${(props) => ThemeColors[props.theme.mode]["s_size_button_text"]};
`;

export const SRadioButton = styled.input.attrs((props) => ({
  type: "radio",
  name: props.name,
  value: props.value,
}))`
  cursor: ${(props) => (props.id.includes("cart") ? "auto" : "pointer")};
  margin: 0;

  &.size {
    appearance: none;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  &.color {
    appearance: none;
    width: ${(props) => (props.id === "mini-cart" ? "16px" : "32px")};
    height: ${(props) => (props.id === "mini-cart" ? "16px" : "32px")};
    background: ${(props) => props.color};
    border: 1px solid #1d1f22;
    /* border: none; */
    padding: 10px;
  }

  &.size:checked + ${SRadioButtonLabel} {
    background: ${(props) =>
      ThemeColors[props.theme.mode]["s_size_button_hover"]};
    color: ${(props) =>
      ThemeColors[props.theme.mode]["s_size_button_text_hover"]};
    transition-duration: 0.4s;
  }

  &.color:checked {
    border: 1px solid #ffffff;
    outline: 1px solid #5ece7b;
  }
`;

export const SButtonLabel = styled.span`
  margin-bottom: 7px;
  font-weight: 700;
  font-size: 18px;
  text-transform: uppercase;

  ${(props) =>
    props.id === "mini-cart" &&
    css`
      font-size: 14px;
      font-weight: 400;
      text-transform: none;
    `};
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  gap: ${(props) => props.gap};
  flex-wrap: wrap;
`;
