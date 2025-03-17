import { ItemList } from '@/components/items/item-list';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { LoadingSpinners } from '@/components/common/loading-spinners';

export const metadata: Metadata = {
  title: 'LOL 가이드 - 아이템 리스트',
};

const ItemsPage = async () => {
  return (
    <div className="flex w-full flex-col items-center gap-10">
      <h2 className="text-xl font-bold">아이템 목록</h2>
      <Suspense fallback={<LoadingSpinners />}>
        <ItemList />
      </Suspense>
    </div>
  );
};

export default ItemsPage;
