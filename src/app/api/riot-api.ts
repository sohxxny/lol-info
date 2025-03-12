import { Item, RowItem } from '@/types/item';
import { API_ITEMS_URL } from './api-endpoints';

export const getItems = async () => {
  const result = await fetch(API_ITEMS_URL, { cache: 'force-cache' });
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
