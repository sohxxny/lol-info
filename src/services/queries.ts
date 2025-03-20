import { ROUTE_HANDLER_ROTATION_URL } from '@/constants';
import { Champion } from '@/types/champions-types';
import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from '@tanstack/react-query';

export const useGetRotation = (): UseSuspenseQueryResult<Champion[], Error> => {
  return useSuspenseQuery({
    queryKey: ['rotation'],
    queryFn: async () => {
      if (typeof window === 'undefined') {
        return [];
      }
      const response = await fetch(ROUTE_HANDLER_ROTATION_URL);
      console.log('response ➡️', response);
      return response.json();
    },
  });
};
