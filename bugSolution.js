function foo(a, b) {
  //Explicit Type checking
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; //performs addition
  } else {
    return "Invalid input"; //Handle non-numeric input
  }
}
console.log(foo(5, "5")); //Output: Invalid input
console.log(foo(5, 5)); //Output: 10

//Alternative Solution using Number()
function foo2(a,b){
  return Number(a) + Number(b);
}
console.log(foo2(5, "5")); //Output: 10
console.log(foo2(5,5)); //Output:10