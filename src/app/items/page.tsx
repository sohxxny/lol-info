import { ItemList } from '@/components/items/item-list';
import { getItems } from '../../api/riot-api';
import { Item } from '@/types/item';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LOL 가이드 - 아이템 리스트',
};

const ItemsPage = async () => {
  const items: Item[] = await getItems();

  return (
    <div className="flex w-full flex-col items-center gap-10 p-[50px]">
      <h2 className="text-xl font-bold">아이템 목록</h2>
      <ItemList items={items} />
    </div>
  );
};

export default ItemsPage;
