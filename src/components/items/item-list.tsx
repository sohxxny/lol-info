import { Item } from '@/types/item';
import { ItemCard } from './item-card';

export const ItemList = ({ items }: { items: Item[] }) => {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
      {items.map((item) => (
        <li key={item.id}>
          <ItemCard item={item} />
        </li>
      ))}
    </ul>
  );
};
