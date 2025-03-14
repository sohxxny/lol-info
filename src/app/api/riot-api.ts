import { Item, RowItem } from '@/types/item';
import { API_ITEMS_URL } from './api-endpoints';
import { stripTags } from '@/utils/utils';

// * 아이템 목록을 가져와서 반환하는 함수
export const getItems = async (): Promise<Item[]> => {
  const result = await fetch(API_ITEMS_URL, { cache: 'force-cache' });
  const data = await result.json();

  // 데이터를 배열로 변환
  const dataArray: Item[] = Object.entries(
    data.data as Record<string, RowItem>,
  ).map(([key, value]: [string, RowItem]) => {
    return {
      id: key,
      name: stripTags(value.name),
      description: stripTags(value.description),
      plaintext: stripTags(value.plaintext),
      image: value.image.full,
      gold: value.gold,
    };
  });

  return dataArray;
};
