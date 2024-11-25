# CS572-Homework-01-Review

1. Clone this repository
2. Install the dependencies with `npm i`
   
## Exercise 01

Fix all the Type errors in the `./fixme` folder.

## Exercise 02

Complete the code for the `./exercise02/storage.ts` file, implement the methods to get, add, update, and remove key-value pairs in the `state` immutable private
property. Some methods return a `boolean` to indicate whether the operation was successfull or not. To test run the script with `npx tsx watch ./exercise02/test.ts`
  
Tips: Use the `structuredClone()` method to deep-clone the `state` object. After modifying the cloned copy, convert it to an immutable object with `Object.freeze()`.
