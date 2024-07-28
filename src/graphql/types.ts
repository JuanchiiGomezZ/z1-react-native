export interface Lesson {
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

export type GetLesons = {
  items: Lesson[];
};
