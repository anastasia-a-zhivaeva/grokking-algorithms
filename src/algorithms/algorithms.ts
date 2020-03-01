export class Algorithms {
  static binarySearch<T>(array: T[], item: T): number | undefined {
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

  static selectionSort<T>(array: T[]): T[] {
    if (!array?.length) {
      return [];
    }
    const newArray: T[] = [];
    while (array.length) {
      const smallestIndex = Algorithms.findSmallestIndex(array);
      newArray.push(array[smallestIndex]);
      array.splice(smallestIndex, 1);
    }
    return newArray;
  }

  static sum(array: number[]): number {
    if (!array?.length) {
      return 0;
    }

    let total = 0;
    for (const item of array) {
      total += item;
    }
    return total;
  }

  static sumRecursive(array: number[]): number {
    if (!array?.length) {
      return 0;
    }

    if (array.length === 1) {
      return array[0];
    }

    return array[0] + this.sumRecursive(array.slice(1));
  }

  static elementsCount<T>(array: T[]): number {
    if (!array?.length) {
      return 0;
    }

    return 1 + this.elementsCount(array.slice(1));
  }

  static max<T>(array: T[]): T | undefined {
    if (!array?.length) {
      return;
    }

    if (array.length === 1) {
      return array[0];
    }

    const max = this.max(array.slice(1))!;
    const current = array[0];
    return current > max ? current : max;
  }

  static binarySearchRecursive<T>(
    array: T[],
    item: T,
    low = 0,
    high = array.length - 1
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
        return this.binarySearchRecursive(array, item, low, mid - 1);
      }

      return this.binarySearchRecursive(array, item, mid + 1, high);
    }
  }

  private static findSmallestIndex<T>(array: T[]): number {
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
}
