import {EJustify, TruncatedAddressPropsType} from "@/shared/standard-address/standardAddress.types";
import useWidthOverlapping from "@/shared/document/useWidthOverlapping/useWidthOverlapping";


function TruncatedAddress({
  address,
  containerClassName,
  justify = EJustify.START,
}: TruncatedAddressPropsType) {
  const { contentRef, isOverlapping, containerRef } = useWidthOverlapping({
    reCalculateDependency: [address],
  });

  if (isOverlapping) {
    const lastAddressCharacters = address.substring(address.length - 7);

    return (
      <div ref={containerRef} className={containerClassName}>
        <p
          ref={contentRef}
          className={`w-full flex items-center justify-${justify} m-0`}>
          <span
            className='
            w-3/5 md:w-1/2 xl:w-full
            inline-block
            truncate
            text-nowrap
            text-clip
            overflow-hidden
            text-start
          '>
            {address}
          </span>
          ...
          {lastAddressCharacters}
        </p>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={containerClassName}>
      <p
        ref={contentRef}
        className='w-fit flex items-center m-0'>
        {address}
      </p>
    </div>
  );
}

export default TruncatedAddress;
