import { ChampionCard } from './champion-card';
import { Champion } from '@/types/champions';

// * 챔피언 리스트 컴포넌트
export const ChampionList = ({ champions }: { champions: Champion[] }) => {
  return (
    <ul className="grid w-full grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-items-center gap-5">
      {champions.map((champion) => (
        <li key={champion.key} className="w-full max-w-[250px]">
          <ChampionCard champion={champion} />
        </li>
      ))}
    </ul>
  );
};
