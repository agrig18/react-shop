import styled from "styled-components";
import { ThemeColors } from "utils/theme";

export const CategoriesListWrapper = styled.div`
  padding: 28px 100px;
`;

export const CategoryTitle = styled.h2`
  font-size: 42px;
  font-weight: 400;
  color: ${(props) => ThemeColors[props.theme.mode]["s_category_header"]};
`;

export const ProductsListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  /* display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap; */
`;
