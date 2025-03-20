'use client';

import { LoadingSpinners } from '@/components/common/loading-spinners';
import { RotationPageList } from '@/components/rotation/rotation-list';
import { QueryProvider } from '@/services/provider';
import { Suspense } from 'react';

const RotationPage = () => {
  return (
    <QueryProvider>
      <div className="flex w-full flex-col items-center gap-10">
        <h2 className="text-xl font-bold">이번주 무료 챔피언</h2>
        <Suspense fallback={<LoadingSpinners />}>
          <RotationPageList />
        </Suspense>
      </div>
    </QueryProvider>
  );
};

export default RotationPage;
