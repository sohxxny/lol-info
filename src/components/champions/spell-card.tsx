import { API_CHAMPION_SPELL_IMAGE } from '@/constants';
import { ChampionSpell } from '@/types/champions-types';
import Image from 'next/image';

// * 스펠 카드 컴포넌트
export const SpellCard = ({ spell }: { spell: ChampionSpell }) => {
  return (
    <div className="flex h-full w-full flex-col items-center gap-3 rounded-xl bg-primary p-5">
      <h4 className="font-bold">{spell.name}</h4>
      <Image
        src={API_CHAMPION_SPELL_IMAGE(spell.image.full)}
        alt={spell.name}
        width={100}
        height={100}
      />
      <p className="text-sm">{spell.description}</p>
    </div>
  );
};
