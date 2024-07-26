export interface Item {
  id: string;
  title: string;
  image: string;
  category: Category;
  author: string;
  content: string;
}

export type Category = {
  id: string;
  title: string;
};

export type GetItemsData = {
  items: Item[];
};
