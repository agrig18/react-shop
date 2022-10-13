import { gql } from "@apollo/client";

//currencies
export const GET_CURRENCIES = gql`
  query Currencies {
    currencies {
      label
      symbol
    }
  }
`;

//categories
export const GET_CATEGORIES = gql`
  query Categories {
    categories {
      name
      products {
        __typename @skip(if: true)
        id
      }
    }
  }
`;

//products per category
export const GET_CATEGORY_PRODUCTS = gql`
  query CategoryProducts($input: CategoryInput) {
    category(input: $input) {
      name
      products {
        __typename @skip(if: true)
        id
        name
        inStock
        gallery
        description
        category
        brand

        attributes {
          __typename @skip(if: true)
          id
          name
          type
          items {
            __typename @skip(if: true)
            displayValue
            id
          }
        }

        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`;

//product
export const GET_PRODUCT = gql`
  query Product($id: String!) {
    product(id: $id) {
      __typename @skip(if: true)
      id
      name
      inStock
      gallery
      description
      category
      brand

      attributes {
        __typename @skip(if: true)
        id
        name
        type
        items {
          __typename @skip(if: true)
          displayValue
          id
        }
      }

      prices {
        currency {
          label
          symbol
        }
        amount
      }
    }
  }
`;
