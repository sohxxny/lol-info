export type Champion = {
  id: string;
  name: string;
  title: string;
  image: string;
};

export type RowChampion = {
  id: string;
  name: string;
  title: string;
  image: { full: string };
};
