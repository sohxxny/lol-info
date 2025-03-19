import { API_ITEMS_IMAGE_URL } from '@/constants';
import { Item } from '@/types/item-types';
import Image from 'next/image';

// * 개별 아이템 컴포넌트
export const ItemCard = ({ item }: { item: Item }) => {
  return (
    <ul className="flex h-full w-full flex-col items-center gap-2 rounded-xl bg-primary p-5">
      <li className="font-bold">{item.name}</li>
      <li>
        <Image
          src={API_ITEMS_IMAGE_URL(item.image.full)}
          alt={item.name}
          width={100}
          height={100}
        />
      </li>
      <li className="text-sm">{item.plaintext}</li>
      <li className="text-sm font-bold">구매: {item.gold.total}</li>
      <li className="text-sm font-bold">판매: {item.gold.sell}</li>
    </ul>
  );
};
