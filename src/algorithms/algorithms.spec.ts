import { Algorithms } from '@src/algorithms';

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

it('Binary Search Recursive, array = [1, 3, 5, 7, 9], item = 3, result = 1', () => {
  expect(Algorithms.binarySearchRecursive([1, 3, 5, 7, 9], 3)).toBe(1);
});

it('Binary Search Recursive, array = [1, 3, 5, 7, 9], item = 7, result = 3', () => {
  expect(Algorithms.binarySearchRecursive([1, 3, 5, 7, 9], 7)).toBe(3);
});

it('Binary Search Recursive, array = [1, 3, 5, 7, 9], item = -1, result = undefined', () => {
  expect(Algorithms.binarySearchRecursive([1, 3, 5, 7, 9], -1)).toBeUndefined();
});

it('Binary Search Recursive, array = [], item = -1, result = undefined', () => {
  expect(Algorithms.binarySearchRecursive([], -1)).toBeUndefined();
});

it('Max, array = [5, 3, 6, 2, 10], result = 10', () => {
  expect(Algorithms.max([5, 3, 6, 2, 10])).toStrictEqual(10);
});

it('Max, array = [], result = undefined', () => {
  expect(Algorithms.max([])).toBeUndefined();
});

it('Elements Count, array = [5, 3, 6, 2, 10], result = 5', () => {
  expect(Algorithms.elementsCount([5, 3, 6, 2, 10])).toStrictEqual(5);
});

it('Elements Count, array = [], result = 0', () => {
  expect(Algorithms.elementsCount([])).toStrictEqual(0);
});

it('Sum Recursive, array = [5, 3, 6, 2, 10], result = 26', () => {
  expect(Algorithms.sumRecursive([5, 3, 6, 2, 10])).toStrictEqual(26);
});

it('Sum Recursive, array = [], result = 0', () => {
  expect(Algorithms.sumRecursive([])).toStrictEqual(0);
});

it('Sum, array = [5, 3, 6, 2, 10], result = 26', () => {
  expect(Algorithms.sum([5, 3, 6, 2, 10])).toStrictEqual(26);
});

it('Sum, array = [], result = 0', () => {
  expect(Algorithms.sum([])).toStrictEqual(0);
});

it('Find Smallest Index (private function), array = [], result = -1', () => {
  expect(Algorithms['findSmallestIndex']([])).toStrictEqual(-1);
});
