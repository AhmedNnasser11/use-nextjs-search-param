export interface UseHandleFilterReturnType {
  onFilter: (key: string, value: any) => void;
  onReset: (key: string) => void;
  onResetAll: () => void;
  page: number;
  [key: string]: any;
}