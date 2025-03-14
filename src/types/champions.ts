export type Champion = {
  id: string;
  key: string;
  name: string;
  title: string;
  image: string;
  lore: string;
  info: { attack: number; defense: number; magic: number; difficulty: number };
};

export type RowChampion = {
  id: string;
  key: string;
  name: string;
  title: string;
  image: { full: string };
  lore: string;
  info: { attack: number; defense: number; magic: number; difficulty: number };
};
