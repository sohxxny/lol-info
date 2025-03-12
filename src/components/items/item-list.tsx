import { Item } from '@/types/item';
import { ItemCard } from './item-card';

export const ItemList = ({ items }: { items: Item[] }) => {
  return (
    <ul className="w-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5 justify-items-center">
      {items.map((item) => (
        <li key={item.id} className="max-w-[250px] w-full">
          <ItemCard item={item} />
        </li>
      ))}
    </ul>
  );
};
