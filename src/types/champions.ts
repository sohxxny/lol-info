export type Champion = {
  id: string;
  key: string;
  name: string;
  title: string;
  image: string;
};

export type RowChampion = {
  id: string;
  key: string;
  name: string;
  title: string;
  image: { full: string };
};
