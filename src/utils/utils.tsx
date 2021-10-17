import { useEffect } from 'react';

export default function useOutsideAlerter(ref: any, callback: any) {
  /**
   * Alert if clicked on outside of element
   */
  function handleClickOutside(event: any) {
    if (ref.current && !ref.current.contains(event.target)) {
      callback(false);
    }
  }

  useEffect(() => {
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
}

export function truncate(source: string, size: number) {
  return source.length > size ? source.slice(0, size - 1) + '…' : source;
}

// shorten the checksummed version of the input address to have 0x + 4 characters at start and end
export function formatAddress(
  address: string | null | undefined,
  ensName: string | null | undefined,
  chars = 4,
): string {
  if (ensName) return ensName;
  else if (address)
    return `${address.substring(0, chars + 2)}...${address.substring(
      42 - chars,
    )}`;
  else return '';
}

export const Breakpoints = {
  xs: 320,
  sm: 769,
  md: 1200,
  lg: 1600,
};

// Add commas to large numbers and limit to two decimal places if nonzero
export const formatNumber = (num: number | string): string => {
  if (!num) return '0'; // Don't append decimals to 0
  return Number(num).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const calcDiff = (first: number | string, last: number | string) => {
  return ((Number(last) - Number(first)) / Number(first)) * 100;
};

export const loadImage = async (blob: Blob): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    function onError() {
      reject(new Error('Failed to load image'));
    }

    const image = new Image();
    image.onerror = onError;
    image.onload = function () {
      resolve(image);
    };

    const reader = new FileReader();
    reader.onerror = onError;
    reader.onload = function (readerEvent) {
      if (readerEvent.target?.result == null) {
        onError();
      } else {
        image.src = readerEvent.target.result as string;
      }
    };
    reader.readAsDataURL(blob);
  });
};
