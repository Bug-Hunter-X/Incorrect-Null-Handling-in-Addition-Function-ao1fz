# Incorrect Null Handling in Addition Function

This repository demonstrates a common JavaScript bug related to incorrect null value handling within an addition function.  The `foo` function is designed to add two numbers; however, its handling of null values is flawed. This example highlights the importance of robust null checks and appropriate error handling in JavaScript functions.

## Bug Description
The primary issue lies in how the function handles `null` inputs.  Instead of providing a more graceful handling (such as returning 0, throwing an error, or using a default value), it simply returns `null` if either input is `null`, even if the other input is a valid number.

## Bug Solution
The provided solution demonstrates improved handling of `null` values. The modified function checks for null values and provides alternative behavior, ensuring the function behaves correctly even with null inputs. 

## How to Run
1. Clone the repository.
2. Open the `bug.js` file to view the buggy code.
3. Open the `bugSolution.js` file to see the corrected code.
4. Run both files in your preferred JavaScript environment to observe the difference in behavior.