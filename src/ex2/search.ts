export function insertionSort<T>(array: T[]): void {
  if (!array.length || array.length === 1) {
    return;
  } 

  // Start from the second element, the first element is
  // already sorted
  for(let i = 1; i < array.length; i++) {
    let value = array[i];
    let j = i;

    while (j > 0 && array[j - 1] > value) {
      array[j] = array[j - 1]
      j = j - 1
    }
    array[j] = value;
  }
}

export function bubbleSort<T>(array: T[]): void {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}
