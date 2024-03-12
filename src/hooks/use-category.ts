//api
import { categoryApi } from '@/apis';

//constant
import { QUERY_KEY } from '@/constants';

//swr
import useSWR from 'swr';
import { SWRConfiguration } from 'swr/_internal';

export function useCategory(id: string, options?: Partial<SWRConfiguration>) {
  const {
    data: category,
    error,
    mutate
  } = useSWR(
    QUERY_KEY.category,
    async () => {
      const { data } = await categoryApi.getCategoryById(id);
      return data;
    },
    {
      revalidateOnMount: true,
      revalidateOnFocus: true,
      keepPreviousData: true,
      ...options
    }
  );

  return { category, mutate, error, isLoading: !error && !category };
}
