import { useLayoutEffect, useRef, useState } from 'react';

type useOverlappingPropsType = {
  reCalculateDependency: any[]
};
function useWidthOverlapping({ reCalculateDependency }: useOverlappingPropsType) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isOverlapping, setIsOverlapping] = useState(false);

  useLayoutEffect(() => {
    if (!containerRef.current) {
      return;
    }

    if (!contentRef.current) {
      return;
    }

    const { width: containerWidth } = containerRef.current?.getBoundingClientRect();
    const { width: contentWidth } = contentRef.current?.getBoundingClientRect();

    if (contentWidth > containerWidth) {
      setIsOverlapping(contentWidth > containerWidth);
    }
  }, [
    ...reCalculateDependency,
    containerRef?.current?.getBoundingClientRect().width,
    contentRef?.current?.getBoundingClientRect().width,
  ]);

  return {
    containerRef,
    contentRef,
    isOverlapping,
  };
}

export default useWidthOverlapping;
