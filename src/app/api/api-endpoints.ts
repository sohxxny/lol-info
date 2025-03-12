// API 버전 및 base url
const API_VERSION = '15.5.1';
const BASE_URL = `https://ddragon.leagueoflegends.com/cdn/${API_VERSION}`;

// 엔드포인트 포함된 url
export const API_ITEMS_URL = `
  ${BASE_URL}/data/ko_KR/item.json`;
export const API_ITEMS_IMAGE_URL = (image: string) =>
  `${BASE_URL}/img/item/${image}`;
