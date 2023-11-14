import { describe, expect, test } from '@jest/globals';
import { bubbleSort, insertionSort } from './search';

describe("# Insertion Sort", () => {
  test("sort an empty array", () => {
    let emptyArray = [];
    insertionSort(emptyArray);
    expect(emptyArray).toStrictEqual([]);
  }) ;

  test("sort an array with one item", () => {
    let array = [3];
    insertionSort(array);
    expect(array).toStrictEqual([3]);
  });

  test("sort an array with multiple items", () => {
    let array = [4, 3, 2, 1];
    insertionSort(array);
    expect(array).toStrictEqual([1, 2, 3, 4]);
  });
});

describe("# Bubble Sort", () => {
  test("sort an empty array", () => {
    let array = [];
    bubbleSort(array);
    expect(array).toStrictEqual([]);
  });

  test("sory an array with one item", () => {
    let array = [3];
    bubbleSort(array);
    expect(array).toStrictEqual([3]);
  });

  test("sort an array with multiple items", () => {
    let array = [4, 3, 2, 1];
    bubbleSort(array);
    expect(array).toStrictEqual([1, 2, 3, 4]);
  });
});