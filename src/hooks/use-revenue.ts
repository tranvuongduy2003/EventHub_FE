//api
import { statisticApi } from '@/apis';

//constant
import { QUERY_KEY } from '@/constants';

//swr
import useSWR from 'swr';
import { SWRConfiguration } from 'swr/_internal';

export function useRevuene(options?: Partial<SWRConfiguration>) {
  const {
    data: revenue,
    error,
    mutate
  } = useSWR(
    QUERY_KEY.revenue,
    async () => {
      const { data } = await statisticApi.getRevenueInYear();
      return data;
    },
    {
      revalidateOnMount: true,
      revalidateOnFocus: true,
      keepPreviousData: true,
      ...options
    }
  );

  return { revenue, mutate, error, isLoading: !error && !revenue };
}
