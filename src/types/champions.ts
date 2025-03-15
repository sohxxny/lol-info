// 챔피언 리스트에서 받을 챔피언 타입
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

// 개별 챔피언 페이지에서 받을 챔피언 타입
export type ChampionDetail = {
  id: string;
  key: string;
  name: string;
  title: string;
  image: string;
  lore: string;
  spells: ChampionSpell[];
};

// 챔피언 스펠 타입
export type ChampionSpell = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export type RowChampionSpell = {
  id: string;
  name: string;
  description: string;
  image: { full: string };
};
