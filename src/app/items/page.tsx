import { ItemList } from '@/components/items/item-list';
import { Suspense } from 'react';
import { LoadingSpinners } from '@/components/common/loading-spinners';

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
