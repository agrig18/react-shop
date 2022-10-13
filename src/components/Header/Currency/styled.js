import styled from "styled-components";
import { ThemeColors } from "utils/theme";

export const SCurrencies = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    cursor: pointer;
  }

  li:hover {
    background-color: ${(props) =>
      ThemeColors[props.theme.mode]["s_currency_hover"]};
  }
`;
