// API 버전 및 base url
const API_VERSION = '15.5.1';
const BASE_URL = `https://ddragon.leagueoflegends.com/cdn/${API_VERSION}`;

// 엔드포인트 포함된 url
export const API_ITEMS_URL = `
  ${BASE_URL}/data/ko_KR/item.json`;
export const API_ITEMS_IMAGE_URL = (image: string) =>
  `${BASE_URL}/img/item/${image}`;
export const API_CHAMPION_URL = (name: string) =>
  `${BASE_URL}/data/ko_KR/champion/${name}.json`;
export const API_CHAMPIONS_URL = `${BASE_URL}/data/ko_KR/champion.json`;
export const API_CHAMPION_IMAGE_URL = (image: string) =>
  `${BASE_URL}/img/champion/${image}`;
export const API_CHAMPION_SPELL_IMAGE = (image: string) =>
  `${BASE_URL}/img/spell/${image}`;

export const API_ROTATION_URL =
  'https://kr.api.riotgames.com/lol/platform/v3/champion-rotations';

// revalidate 시간을 위한 하루 초수 상수
export const DAY_IN_SECONDS = 86400;
