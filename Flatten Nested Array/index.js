function flatten(arr) {
  function helper(arr, result) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        helper(arr[i], result);
      } else {
        result.push(arr[i]);
      }
    }
    return result;
  }
  return helper(arr, []);
}

console.log(flatten([1, [2, [3, 4], 5], 6]));
