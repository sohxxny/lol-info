import { getChampions } from '@/api/riot-api';
import { Champion } from '@/types/champions';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LOL 가이드 - 챔피언 리스트',
};

const ChampionsPage = async () => {
  const champions: Champion[] = await getChampions();

  return (
    <>
      <div>ChampionsPage</div>
    </>
  );
};

export default ChampionsPage;
