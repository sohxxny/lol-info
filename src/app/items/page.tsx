import { ItemList } from '@/components/items/item-list';
import { getItems } from '../api/riot-api';
import { Item } from '@/types/item';

const ItemsPage = async () => {
  const items: Item[] = await getItems();

  return (
    <div className="flex flex-col items-center w-full p-[50px] gap-10">
      <h2 className="text-xl font-bold">아이템 목록</h2>
      <ItemList items={items} />
    </div>
  );
};

export default ItemsPage;
