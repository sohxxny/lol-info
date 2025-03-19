'use client';

import { ChampionList } from '@/components/champions/champion-list';
import { LoadingSpinners } from '@/components/common/loading-spinners';
import { useGetRotation } from '@/tanstack/queries';
import { Champion } from '@/types/champions-types';
import { Suspense } from 'react';

const RotationPage = () => {
  return (
    <div className="flex w-full flex-col items-center gap-10">
      <h2 className="text-xl font-bold">이번주 무료 챔피언</h2>
      <Suspense fallback={<LoadingSpinners />}>
        <RotationPageList />
      </Suspense>
    </div>
  );
};

const RotationPageList = () => {
  // const { data: rotation } = useGetRotation();
  const rotation: Champion[] = [];
  return <ChampionList champions={rotation} />;
};

export default RotationPage;
