import { useEffect } from "react";

export type LoaderProps = {
  onLoadingComplete?: () => void;
};

export const Loader = ({ onLoadingComplete }: LoaderProps) => {
  useEffect(() => {
    onLoadingComplete?.();
  }, [onLoadingComplete]);
  return null;
};

export default Loader;
