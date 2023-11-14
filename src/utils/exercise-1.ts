import { printHello } from "./utils/hello";

const HI = "hi";
console.log(HI);

/**
 * 
 * @param {number} value - The value to add one
 * @returns 
 */
export const addOne = (value: number) => {
  return value + 1;
}

export const printHelloThenAddOne = (value: number) => {
  printHello();
  return addOne(value);
}