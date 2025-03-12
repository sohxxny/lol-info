import { Item, RowItem } from '@/types/item';

export const getItems = async () => {
  const result = await fetch(
    'https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/item.json'
  );
  const data = await result.json();

  // 데이터를 배열로 변환
  const dataArray: Item[] = Object.entries(
    data.data as Record<string, RowItem>
  ).map(([key, value]: [string, RowItem]) => {
    return {
      id: key,
      name: value.name,
      plaintext: value.plaintext,
      image: value.image.full,
    };
  });

  return dataArray;
};
