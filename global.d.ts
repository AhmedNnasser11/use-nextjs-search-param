declare module 'next/navigation' {
  export function useSearchParams(): URLSearchParams;
}

declare module 'next-nprogress-bar' {
  import { NextRouter } from 'next/router';
  export function useRouter(): NextRouter;
}