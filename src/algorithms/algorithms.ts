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
}
