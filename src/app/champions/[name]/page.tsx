import { getChampion } from '@/api/riot-api';
import { API_CHAMPION_IMAGE_URL } from '@/constants';
import { Champion } from '@/types/champions';
import Image from 'next/image';

const ChampionDetailPage = async ({ params }: { params: { name: string } }) => {
  const champion: Champion = await getChampion(params.name);

  return (
    <div className="flex h-screen w-full justify-center">
      <div className="flex max-w-[800px] flex-col items-center gap-5 p-[50px] px-[50px]">
        <h3 className="text-4xl font-bold">{champion.name}</h3>
        <p className="text-lg font-bold">{champion.title}</p>
        <Image
          src={API_CHAMPION_IMAGE_URL(champion.image)}
          alt={champion.image}
          width={200}
          height={200}
        />
        <p>{champion.lore}</p>
        <h4 className="text-lg font-bold">스탯</h4>
        <ul>
          <li>공격력: {champion.info.attack}</li>
          <li>방어력: {champion.info.defense}</li>
          <li>마법력: {champion.info.magic}</li>
          <li>난이도: {champion.info.difficulty}</li>
        </ul>
      </div>
    </div>
  );
};

export default ChampionDetailPage;
