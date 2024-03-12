import { useEffect } from 'react';

//api
import { eventApi } from '@/apis';

//constant
import { QUERY_KEY } from '@/constants';

//model
import { FilteringOptions } from '@/models';

//swr
import useSWR from 'swr';
import { SWRConfiguration } from 'swr/_internal';

export function useEventsByOrganizer(
  organizerId: string,
  filter?: Partial<FilteringOptions>,
  options?: Partial<SWRConfiguration>
) {
  const { data, mutate, error } = useSWR(
    QUERY_KEY.events,
    async () => {
      const { data, meta } = await eventApi.getEventsByOrganizerId(
        organizerId,
        filter
      );
      return { events: data, meta };
    },
    {
      revalidateOnMount: true,
      revalidateOnFocus: true,
      keepPreviousData: true,
      ...options
    }
  );

  useEffect(() => {
    mutate();
  }, [
    filter?.order,
    filter?.page,
    filter?.size,
    filter?.search,
    filter?.takeAll,
    mutate
  ]);

  return {
    events: data?.events,
    meta: data?.meta,
    mutate,
    error,
    isLoading: !error && !data
  };
}
