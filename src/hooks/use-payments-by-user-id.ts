import { useEffect } from 'react';

//api
import { paymentApi } from '@/apis';

//constant
import { QUERY_KEY } from '@/constants';

//component
import { FilteringOptions } from './../models/common';

//swr
import useSWR from 'swr';
import { SWRConfiguration } from 'swr/_internal';

export function usePaymentsByUserId(
  userId: string,
  filter?: Partial<FilteringOptions>,
  options?: Partial<SWRConfiguration>
) {
  const {
    data: payments,
    error,
    mutate
  } = useSWR(
    [QUERY_KEY.payments, 'user', userId],
    async () => {
      const { data } = await paymentApi.getPaymentsByUserId(userId, filter);
      return data;
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

  return { payments, error, isLoading: !error && !payments };
}
