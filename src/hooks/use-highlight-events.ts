//api
import { eventApi } from '@/apis';

//constant
import { QUERY_KEY } from '@/constants';

//swr
import useSWR from 'swr';
import { SWRConfiguration } from 'swr/_internal';

export function useHighlightEvents(options?: Partial<SWRConfiguration>) {
  const {
    data: events,
    error,
    mutate
  } = useSWR(
    [QUERY_KEY.events, 'highlight'],
    async () => {
      const { data } = await eventApi.getHighlightEventsList();
      return data;
    },
    {
      revalidateOnMount: true,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      ...options
    }
  );

  return { events, mutate, error, isLoading: !error && !events };
}
