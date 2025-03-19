import { ROUTE_HANDLER_ROTATION_URL } from '@/constants';
import { Champion } from '@/types/champions-types';
import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from '@tanstack/react-query';

export const useGetRotation = (): UseSuspenseQueryResult<Champion[]> => {
  return useSuspenseQuery({
    queryKey: ['rotation'],
    queryFn: async () => {
      const response = await fetch(ROUTE_HANDLER_ROTATION_URL);
      return response.json();
    },
  });
};
