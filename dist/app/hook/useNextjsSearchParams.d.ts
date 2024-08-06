export interface UseHandleFilterReturnType {
    onFilter: (key: string, value: any) => void;
    onReset: (key: string) => void;
    [param: string]: any;
}
declare const useNextjsSearchParams: () => UseHandleFilterReturnType;
export default useNextjsSearchParams;
