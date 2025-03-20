import { getChampion } from '@/services/riot-api';
import { SpellCard } from '@/components/champions/spell-card';
import { API_CHAMPION_IMAGE_URL } from '@/constants';
import { ChampionDetail } from '@/types/champions-types';
import Image from 'next/image';

export async function generateMetadata({
  params,
}: {
  params: { name: string };
}) {
  const champion: ChampionDetail = await getChampion(params.name);
  return {
    title: `LOL 가이드 - ${champion.name}`,
  };
}

const ChampionDetailPage = async ({ params }: { params: { name: string } }) => {
  const champion: ChampionDetail = await getChampion(params.name);

  return (
    <div className="flex h-screen w-full justify-center">
      <div className="flex flex-col items-center gap-5">
        <h3 className="text-4xl font-bold">{champion.name}</h3>
        <p className="text-lg font-bold">{champion.title}</p>
        <Image
          src={API_CHAMPION_IMAGE_URL(champion.image.full)}
          alt={champion.image.full}
          width={200}
          height={200}
        />
        <p className="max-w-[800px]">{champion.lore}</p>
        <h4 className="text-lg font-bold">스킬</h4>
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
          {champion.spells.map((spell) => (
            <li key={spell.id}>
              <SpellCard spell={spell} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChampionDetailPage;
