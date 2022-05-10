import { MutableRefObject, useEffect, useRef, useState } from 'react';

const useHover = (): [MutableRefObject<any>, boolean] => {
  const ref = useRef(null);
  const [value, setValue] = useState(false);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    node.addEventListener('mouseover', handleMouseOver);
    node.addEventListener('mouseout', handleMouseOut);

    return () => {
      node.removeEventListener('mouseover', handleMouseOver);
      node.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return [ref, value];
};

export default useHover;
