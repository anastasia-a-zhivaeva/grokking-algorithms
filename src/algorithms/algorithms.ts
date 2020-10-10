export function binarySearch<T>(array: T[] | undefined, item: T): number | undefined {
  if (!array?.length) {
    return;
  }

  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    const mid = Math.round((low + high) / 2);
    const guess = array[mid];
    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
}

export function selectionSort<T>(array: T[] | undefined): T[] {
  if (!array?.length) {
    return [];
  }
  const newArray: T[] = [];
  while (array.length) {
    const smallestIndex = findSmallestIndex(array);
    newArray.push(array[smallestIndex]);
    array.splice(smallestIndex, 1);
  }
  return newArray;
}

export function sum(array: number[] | undefined): number {
  if (!array?.length) {
    return 0;
  }

  let total = 0;
  for (const item of array) {
    total += item;
  }
  return total;
}

export function sumRecursive(array: number[] | undefined): number {
  if (!array?.length) {
    return 0;
  }

  if (array.length === 1) {
    return array[0];
  }

  return array[0] + sumRecursive(array.slice(1));
}

export function elementsCount<T>(array: T[] | undefined): number {
  if (!array?.length) {
    return 0;
  }

  return 1 + elementsCount(array.slice(1));
}

export function max<T>(array: T[] | undefined): T | undefined {
  if (!array?.length) {
    return;
  }

  if (array.length === 1) {
    return array[0];
  }

  const maxValue = max(array.slice(1))!;
  const current = array[0];
  return current > maxValue ? current : maxValue;
}

export function binarySearchRecursive<T>(
  array: T[] | undefined,
  item: T,
  low = 0,
  high = (array?.length || 0) - 1
): number | undefined {
  if (!array?.length) {
    return;
  }

  if (high >= low) {
    const mid = Math.round((low + high) / 2);
    const guess = array[mid];
    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      return binarySearchRecursive(array, item, low, mid - 1);
    }

    return binarySearchRecursive(array, item, mid + 1, high);
  }
}

export function findSmallestIndex<T>(array: T[] | undefined): number {
  if (!array?.length) {
    return -1;
  }

  let smallest = array[0];
  let smallestIndex = 0;
  array.forEach((item, index) => {
    if (item < smallest) {
      smallest = item;
      smallestIndex = index;
    }
  });
  return smallestIndex;
}
