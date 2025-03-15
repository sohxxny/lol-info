import { getChampions } from '@/api/riot-api';
import { ChampionList } from '@/components/champions/champion-list';
import { Champion } from '@/types/champions';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LOL 가이드 - 챔피언 리스트',
};

const ChampionsPage = async () => {
  const champions: Champion[] = await getChampions();

  return (
    <div className="flex w-full flex-col items-center gap-10">
      <h2 className="text-xl font-bold">챔피언 목록</h2>
      <ChampionList champions={champions} />
    </div>
  );
};

export default ChampionsPage;
