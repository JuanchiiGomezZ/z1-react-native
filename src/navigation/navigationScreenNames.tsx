import {Item} from '../graphql/types';

export const navigationScreenNames = {
  home: 'Home',
  detials: 'Details',
};

export type QueryParams = {
  Home: undefined;
  Details: Item;
};
