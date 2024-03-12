//api
import { eventApi } from '@/apis';

//constant
import { QUERY_KEY } from '@/constants';

//swr
import useSWR from 'swr';
import { SWRConfiguration } from 'swr/_internal';

export function useHighlightEvent(options?: Partial<SWRConfiguration>) {
  const {
    data: event,
    error,
    mutate
  } = useSWR(
    [QUERY_KEY.event, 'highlight'],
    async () => {
      const { data } = await eventApi.getHighlightEvent();
      return data;
    },
    {
      revalidateOnMount: true,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      ...options
    }
  );

  return { event, mutate, error, isLoading: !error && !event };
}
