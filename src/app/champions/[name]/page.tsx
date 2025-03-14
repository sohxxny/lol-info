import { getChampion } from '@/api/riot-api';
import { API_CHAMPION_IMAGE_URL } from '@/constants';
import { Champion } from '@/types/champions';
import Image from 'next/image';

const ChampionDetailPage = async ({ params }: { params: { name: string } }) => {
  const champion: Champion = await getChampion(params.name);

  return (
    <>
      <h3>{champion.name}</h3>
      <p>{champion.title}</p>
      <Image
        src={API_CHAMPION_IMAGE_URL(champion.image)}
        alt={champion.image}
        width={200}
        height={200}
      />
      <p>{champion.lore}</p>
      <h4>스탯</h4>
      <ul>
        <li>공격력: {champion.info.attack}</li>
        <li>방어력: {champion.info.defense}</li>
        <li>마법력: {champion.info.magic}</li>
        <li>난이도: {champion.info.difficulty}</li>
      </ul>
    </>
  );
};

export default ChampionDetailPage;
