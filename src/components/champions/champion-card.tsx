import { API_CHAMPION_IMAGE_URL } from '@/constants';
import { Champion } from '@/types/champions-types';
import Image from 'next/image';

// * 개별 챔피언 컴포넌트
export const ChampionCard = ({ champion }: { champion: Champion }) => {
  return (
    <div className="flex h-full w-full flex-col items-center gap-2 rounded-xl bg-primary p-5">
      <h3 className="font-bold">{champion.name}</h3>
      <Image
        src={API_CHAMPION_IMAGE_URL(champion.image.full)}
        alt={champion.name}
        width={100}
        height={100}
      />
      <span className="text-sm">{champion.title}</span>
    </div>
  );
};
