import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { DefaultBreakpointName } from 'styled-components-breakpoint';

const isBreaking = (breakpoint: number) => breakpoint > window.innerWidth;

const useBreakpoint = (key: DefaultBreakpointName) => {
  const { breakpoints } = useTheme();
  const breakValue = breakpoints[key];
  const [isSmallerThan, setIsSmallerThan] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallerThan(isBreaking(breakValue));
    };
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isSmallerThan;
};

export default useBreakpoint;
