import { useEffect } from 'react';

//api
import { paymentApi } from '@/apis';

//constant
import { QUERY_KEY } from '@/constants';

//model
import { FilteringOptions } from '@/models';

//swr
import useSWR from 'swr';
import { SWRConfiguration } from 'swr/_internal';

export function usePaymentsByEventId(
  eventId: string,
  filter?: Partial<FilteringOptions>,
  options?: Partial<SWRConfiguration>
) {
  const { data, mutate, error } = useSWR(
    [QUERY_KEY.payments, eventId],
    async () => {
      const { data, meta } = await paymentApi.getPaymentsByEventId(
        eventId,
        filter
      );
      return { payments: data, meta };
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
    payments: data?.payments,
    meta: data?.meta,
    mutate,
    error,
    isLoading: !error && !data
  };
}
