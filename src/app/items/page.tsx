import { ItemList } from '@/components/items/item-list';
import { getItems } from '../api/riot-api';
import { Item } from '@/types/item';

const ItemsPage = async () => {
  const items: Item[] = await getItems();

  return (
    <>
      <h2>아이템 목록</h2>
      <ItemList items={items} />
    </>
  );
};

export default ItemsPage;
