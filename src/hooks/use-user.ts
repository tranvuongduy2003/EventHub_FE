//api
import { userApi } from '@/apis';

//constant
import { MILLISECOND_PER_HOUR, QUERY_KEY } from '@/constants';

//swr
import useSWR from 'swr';
import { SWRConfiguration } from 'swr/_internal';

export function useUser(id: string, options?: Partial<SWRConfiguration>) {
  const {
    data: user,
    error,
    mutate
  } = useSWR(
    [QUERY_KEY.user, id],
    async () => {
      const { data } = await userApi.getUserById(id);
      return data;
    },
    {
      revalidateOnMount: true,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      keepPreviousData: false,
      ...options
    }
  );

  return { user, error, isLoading: !error && !user, mutate };
}
