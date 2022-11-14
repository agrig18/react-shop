import styled from "styled-components";

export const SMiniCartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  top: 50px;
  right: -70px;
  padding: 32px 16px;
  gap: 32px;
  width: 325px;
  height: auto;
  max-height: ${(props) =>
    props.className === "empty-cart" ? "100px" : "505px"};
  margin: auto;
  z-index: 3;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: white;
`;

export const SMiniCartHeader = styled.div``;

export const SButtonWrapper = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12px;

  a {
    text-decoration: none;
  }
`;
