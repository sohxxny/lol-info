import { API_ITEMS_IMAGE_URL } from '@/app/api/api-endpoints';
import { Item } from '@/types/item';
import Image from 'next/image';

export const ItemCard = ({ item }: { item: Item }) => {
  return (
    <ul className="flex flex-col min-w-[100px] max-w-[200px]">
      <li>{item.name}</li>
      <li>
        <Image
          src={API_ITEMS_IMAGE_URL(item.image)}
          alt={item.name}
          width={50}
          height={50}
        />
      </li>
      <li>{item.plaintext}</li>
    </ul>
  );
};
