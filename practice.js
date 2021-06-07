function isEven(...num) {
  var i;
  if (num.length === 0) {
    console.log("Sorry you must provide arguments to the function");
    return false;
  }
  for (i = 0; i < num.length; i++) {
    if (num[i] % 2 !== 0) {
      return false;
    }
  }
  return true;
}

console.log(isEven(2, 4, 6, 8, 10, 12));
console.log(isEven(2, 4, 99, 6));
console.log(isEven(-80808080));
console.log(isEven());
