import styled from "styled-components";

export const SProductPageWrapper = styled.div`
  display: flex;
  padding: 40px 100px;
  max-height: 100vw;

  .product_main_image {
    border: 1px solid #1d1f22;
    width: 500px;
    height: 500px;
    margin-left: 50px;
    margin-right: 100px;
  }
`;

export const SProductGalleryWrapper = styled.div``;

export const SProductGallery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 500px;
  overflow-x: hidden;
  overflow-y: auto;

  img {
    border: 1px solid #1d1f22;
    width: 88px;
    height: 88px;
    cursor: pointer;
  }
`;

export const SProductDescription = styled.div`
  max-height: 240px;
  overflow-x: hidden;
  overflow-y: auto;
`;
