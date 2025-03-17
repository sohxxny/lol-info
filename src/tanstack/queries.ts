import { Champion } from '@/types/champions';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

export const useGetRotation = (): UseQueryResult<Champion[], Error> => {
  return useQuery({
    queryKey: ['rotation'],
    queryFn: async () => {
      const response = await fetch(`/api/riot`);
      return response.json();
    },
  });
};
