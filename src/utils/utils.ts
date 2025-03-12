// * 데이터의 <>, @@ 등 불필요한 문자열을 제거하는 함수
export const stripTags = (html: string): string => {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/@[^>]*@/g, '')
    .replace('바다뱀 은화 500닢', '');
};
