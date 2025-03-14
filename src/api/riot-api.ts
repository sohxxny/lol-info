import { Item, RowItem } from '@/types/item';
import {
  API_CHAMPION_URL,
  API_CHAMPIONS_URL,
  API_ITEMS_URL,
  DAY_IN_SECONDS,
} from '../constants/index';
import { stripTags } from '@/utils/utils';
import { Champion, RowChampion } from '@/types/champions';

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

// * 챔피언 목록을 가져와서 반환하는 함수
export const getChampions = async (): Promise<Champion[]> => {
  const result = await fetch(API_CHAMPIONS_URL, {
    next: { revalidate: DAY_IN_SECONDS },
  });
  const data = await result.json();

  // 데이터를 배열로 변환
  const dataArray: Champion[] = Object.values(
    data.data as Record<string, RowChampion>,
  ).map((value: RowChampion) => {
    return {
      id: value.id,
      key: value.key,
      name: value.name,
      title: value.title,
      image: value.image.full,
      lore: value.lore,
      info: value.info,
    };
  });

  return dataArray;
};

// * 하나의 챔피언 정보를 가져오는 함수
export const getChampion = async (name: string): Promise<Champion> => {
  const result = await fetch(API_CHAMPION_URL(name), { cache: 'no-cache' });
  const data = await result.json();
  const value = data.data[name];
  return {
    id: value.id,
    key: value.key,
    name: value.name,
    title: value.title,
    image: value.image.full,
    lore: value.lore,
    info: value.info,
  };
};
