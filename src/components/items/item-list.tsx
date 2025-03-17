import { Item } from '@/types/item';
import { ItemCard } from './item-card';
import { getItems } from '@/api/riot-api';

// * 아이템 리스트 컴포넌트
export const ItemList = async () => {
  const items: Item[] = await getItems();

  return (
    <ul className="grid w-full grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-items-center gap-5">
      {items.map((item) => (
        <li key={item.id} className="w-full max-w-[250px]">
          <ItemCard item={item} />
        </li>
      ))}
    </ul>
  );
};
