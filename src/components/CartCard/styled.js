import styled from "styled-components";

export const SCartCardWrapper = styled.div``;

export const SCartContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SCartDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  &.mini-cart {
    gap: 8px;
  }
`;

export const SCartCounterSlider = styled.div`
  display: flex;
  gap: ${(props) => (props.className === "mini-cart" ? "8px" : "24px")};
`;

export const SCounter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const SText = styled.span`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  min-width: ${(props) => props.minWidth};
`;

export const SProductDescription = styled.div``;

// export const SButtonsWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   gap: 12px;
// `;
