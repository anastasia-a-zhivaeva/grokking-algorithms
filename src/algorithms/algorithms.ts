export class Algorithms {
  static binarySearch<T>(array: T[], item: T): number | undefined {
    if (!array || !array.length) {
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
    if (!array || !array.length) {
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

  private static findSmallestIndex<T>(array: T[]): number {
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
