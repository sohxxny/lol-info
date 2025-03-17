import { getChampions } from '@/api/riot-api';
import { ChampionList } from '@/components/champions/champion-list';
import { LoadingSpinners } from '@/components/common/loading-spinners';
import { Champion } from '@/types/champions';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'LOL 가이드 - 챔피언 리스트',
};

const ChampionsPage = () => {
  return (
    <div className="flex w-full flex-col items-center gap-10">
      <h2 className="text-xl font-bold">챔피언 목록</h2>
      <Suspense fallback={<LoadingSpinners />}>
        <ChampionPageList />
      </Suspense>
    </div>
  );
};

const ChampionPageList = async () => {
  const champions: Champion[] = await getChampions();
  return <ChampionList champions={champions} />;
};

export default ChampionsPage;
