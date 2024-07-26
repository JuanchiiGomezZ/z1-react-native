import {useEffect, useMemo, useRef} from 'react';

export const debounce = (func: (...args: any[]) => void, timeout: number) => {
  let timer: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
};
export const useDebounce = (callback: () => void, timeout: number = 1000) => {
  const ref = useRef(callback);

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  return useMemo(() => {
    const func = () => {
      ref.current?.();
    };

    return debounce(func, timeout);
  }, [timeout]);
};
export default useDebounce;
