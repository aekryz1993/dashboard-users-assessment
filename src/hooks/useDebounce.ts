import { useCallback, useEffect, useRef } from 'react';

const useDebounce = (delay = 500) => {
  const timerIdRef = useRef<NodeJS.Timeout | number | null>(null);

  useEffect(
    () => () => {
      if (timerIdRef.current) {
        clearTimeout(timerIdRef.current);
      }
    },
    [],
  );

  return useCallback(
    (callback: (...args: unknown[]) => void, ...args: unknown[]) => {
      if (timerIdRef.current) clearTimeout(timerIdRef.current);
      timerIdRef.current = setTimeout(() => {
        callback?.(...args);
      }, delay);
    },
    [delay],
  );
};

export default useDebounce;