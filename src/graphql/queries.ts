import {gql} from '@apollo/client';

export const GET_ITEMS = gql`
  query GetItems {
    items {
      id
      title
      image
      category {
        id
        title
      }
      author
    }
  }
`;

export const GET_ITEM_DETAILS = gql`
  query GetItems {
    items {
      id
      title
      image
      category {
        id
        title
      }
      author
      content
    }
  }
`;
