function foo(a, b) {
  a = a === null ? 0 : a; // Handle null values by setting to 0
  b = b === null ? 0 : b; // Handle null values by setting to 0
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null));// Output: 0