import { useEffect } from 'react';

//api
import { userApi } from '@/apis';

//constant
import { QUERY_KEY } from '@/constants';

//model
import { FilteringOptions } from '@/models';

//swr
import useSWR from 'swr';
import { SWRConfiguration } from 'swr/_internal';

export function useOrganizers(
  filter?: Partial<FilteringOptions>,
  options?: Partial<SWRConfiguration>
) {
  const { data, error, mutate } = useSWR(
    QUERY_KEY.users + '/organizers',
    async () => {
      const { data, meta } = await userApi.getUsersInOrganizer(filter);
      return { users: data, meta };
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
    users: data?.users,
    meta: data?.meta,
    mutate,
    error,
    isLoading: !error && !data
  };
}
