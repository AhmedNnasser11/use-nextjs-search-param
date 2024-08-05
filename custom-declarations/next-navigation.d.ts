declare module 'next/navigation' {
  import { NextRouter } from 'next/router';

  export function useRouter(): NextRouter;
  export function useSearchParams(): URLSearchParams;
}