import { useEffect, useMemo } from "react";
import { useLatest } from "react-use";
import { debounce } from "lodash-es";

export const useDebounce = (funct: Function, delay: number) => {
  const latestCb = useLatest(funct);

  const debouncedFn = useMemo(
    () => debounce((...args) => latestCb.current(...args), delay),
    [delay, latestCb]
  );

  useEffect(() => {
    return () => {
      debouncedFn.cancel();
    };
  }, [debouncedFn]);

  return debouncedFn;
};
