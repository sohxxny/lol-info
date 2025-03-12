export type Item = {
  id: string;
  name: string;
  plaintext: string;
  image: string;
};

export type RowItem = {
  name: string;
  plaintext: string;
  image: { full: string };
};
