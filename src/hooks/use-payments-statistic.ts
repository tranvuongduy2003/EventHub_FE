//api
import { statisticApi } from '@/apis';

//constant
import { QUERY_KEY } from '@/constants';

//swr
import useSWR from 'swr';
import { SWRConfiguration } from 'swr/_internal';

export function usePaymentsStatistic(
  eventId: string,
  options?: Partial<SWRConfiguration>
) {
  const {
    data: paymentsStatistic,
    error,
    mutate
  } = useSWR(
    QUERY_KEY.paymentsStatistic,
    async () => {
      const { data } = await statisticApi.getPaymentsStatistic(eventId);
      return data;
    },
    {
      revalidateOnMount: true,
      revalidateOnFocus: true,
      keepPreviousData: true,
      ...options
    }
  );

  return {
    paymentsStatistic,
    mutate,
    error,
    isLoading: !error && !paymentsStatistic
  };
}
