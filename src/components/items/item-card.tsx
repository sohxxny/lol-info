import { API_ITEMS_IMAGE_URL } from '@/app/api/api-endpoints';
import { Item } from '@/types/item';
import Image from 'next/image';

export const ItemCard = ({ item }: { item: Item }) => {
  return (
    <div className="h-full w-full flex flex-col items-center gap-2 bg-gray-100 p-5 rounded-xl">
      <h3 className="font-bold">{item.name}</h3>
      <Image
        src={API_ITEMS_IMAGE_URL(item.image)}
        alt={item.name}
        width={100}
        height={100}
      />
      <p className="text-sm">{item.plaintext}</p>
    </div>
  );
};
