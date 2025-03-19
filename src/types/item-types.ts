// 웹에서 제공할 아이템 타입
export type Item = {
  id: string;
  name: string;
  description: string;
  plaintext: string;
  image: { full: string };
  gold: { total: number; sell: number };
};

// 아이템 데이터를 받아오기 위한 타입
export type RowItem = Omit<Item, 'id'>;
