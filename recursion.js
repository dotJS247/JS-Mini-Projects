function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
}

const arr = [1, 2, 3, 40];

const ans = multiply(arr, 3);

let recursionValue = multiply(arr, 2) * arr[2];

recursionValue = multiply(arr, 1) * arr[1] * arr[2];

recursionValue = multiply(arr, 0) * arr[0] * arr[1] * arr[2];

recursionValue = 1 * arr[0] * arr[1] * arr[2];

console.log(ans);
console.log(firstLoop);
