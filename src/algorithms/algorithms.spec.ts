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
