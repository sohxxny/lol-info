import { getRotation } from '@/api/riot-api';
import { Champion } from '@/types/champions';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

export const useGetRotation = (): UseQueryResult<Champion[], Error> => {
  return useQuery({
    queryKey: ['rotation'],
    queryFn: getRotation,
  });
};
