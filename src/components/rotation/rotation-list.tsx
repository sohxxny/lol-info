import { useGetRotation } from '@/services/queries';
import { ChampionList } from '../champions/champion-list';

export const RotationPageList = () => {
  const { data: rotation } = useGetRotation();

  return <ChampionList champions={rotation} />;
};
