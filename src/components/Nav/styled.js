import styled from "styled-components";
import { ThemeColors } from "utils/theme";

export const SHeaderNavigation = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 10px;
  }

  li {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 15px;

    &.active-class {
      border-bottom: 2px solid
        ${(props) => ThemeColors[props.theme.mode]["s_header_nav_link_active"]};
    }
  }

  a {
    text-decoration: none;
    color: ${(props) => ThemeColors[props.theme.mode]["s_header_nav_link"]};
    text-transform: uppercase;

    &.active {
      color: ${(props) =>
        ThemeColors[props.theme.mode]["s_header_nav_link_active"]};
    }
  }
`;
