import { API_CHAMPION_IMAGE_URL } from '@/constants';
import { Champion } from '@/types/champions';
import Image from 'next/image';

// * 개별 챔피언 컴포넌트
export const ChampionCard = ({ champion }: { champion: Champion }) => {
  return (
    <ul className="flex h-full w-full flex-col items-center gap-2 rounded-xl bg-gray-100 p-5">
      <li className="font-bold">{champion.name}</li>
      <li>
        <Image
          src={API_CHAMPION_IMAGE_URL(champion.image)}
          alt={champion.name}
          width={100}
          height={100}
        />
      </li>
      <li className="text-sm">{champion.title}</li>
    </ul>
  );
};
