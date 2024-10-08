"use client";
import { useSearchParams, useRouter } from 'next/navigation';
export interface UseHandleFilterReturnType {
  onFilter: (key: string, value: any) => void;
  onReset: (key: string) => void;
  [param: string]: any; // This allows for dynamic string keys with any value
}

const useNextjsSearchParams = (): UseHandleFilterReturnType => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const router = useRouter();

  function isJson(item: string): any {
    try {
      return JSON.parse(item);
    } catch (_e) {
      return item;
    }
  }

  const onFilter = (key: string, value: any) => {
    const valueAsString = ['string', 'number'].includes(typeof value)
      ? String(value)
      : JSON.stringify(value);
    params.set(key, valueAsString);
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const onReset = (key: string) => {
    params.delete(key);
    router.replace(`?${params.toString()}`);
  };
  const onResetAll = () => {
    const keys = Array.from(params.keys());
    keys.forEach((key) => {
      params.delete(key);
    });
    router.replace(`?${params.toString()}`);
  };
  
  

  const dynamicParams: { [param: string]: any } = Object.fromEntries(
    Array.from(params.entries()).map(([key, value]) => [key, isJson(value)])
  );

  return { onFilter, onResetAll,onReset, page: 1, ...dynamicParams };
};

export default useNextjsSearchParams;
