import { Algorithms } from '@src/algorithms/algorithms';

it('Binary Search, array = [1, 3, 5, 7, 9], item = 3, result = 1', () => {
  expect(Algorithms.binarySearch([1, 3, 5, 7, 9], 3)).toBe(1);
});

it('Binary Search, array = [1, 3, 5, 7, 9], item = 7, result = 3', () => {
  expect(Algorithms.binarySearch([1, 3, 5, 7, 9], 7)).toBe(3);
});

it('Binary Search, array = [1, 3, 5, 7, 9], item = -1, result = undefined', () => {
  expect(Algorithms.binarySearch([1, 3, 5, 7, 9], -1)).toBeUndefined();
});

it('Binary Search, array = [], item = -1, result = undefined', () => {
  expect(Algorithms.binarySearch([], -1)).toBeUndefined();
});

it('Selection Sort, array = [5, 3, 6, 2, 10], result = [2, 3, 5, 6, 10]', () => {
  expect(Algorithms.selectionSort([5, 3, 6, 2, 10])).toStrictEqual([2, 3, 5, 6, 10]);
});

it('Selection Sort, array = [], result = []', () => {
  expect(Algorithms.selectionSort([])).toStrictEqual([]);
});
