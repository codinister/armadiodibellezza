'use client';
import { useQuery } from '@tanstack/react-query';
import fetch from './fetch';

const useGetQuery = ({ key, url }: { url: string; key: string }) => {
  const fn = () => fetch({ url });

  const { isPending, data, isError, error } = useQuery({
    queryKey: [key],
    queryFn: fn,
  });

  let result;
  if (isError) {
    result = 'An error occured!';
    console.log(error);
  } else result = isPending ? '' : data.data;

  return result;
};

export default useGetQuery
