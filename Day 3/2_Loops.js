console.clear();
//  Loops

//  for loop

for (let i = 0; i < 5; i++) {
  console.log(i, " for loop");
}

// print fabonacies series
// 0 1 1 2 3 5 8 13 21

var pre = 0;
var cur = 1;
console.log(pre);
console.log(cur);
for (let i = 0; i < 10; i++) {
  let nxt = pre + cur;
  console.log(nxt);
  pre = cur;
  cur = nxt;
}

//  while loop

var time = 5;
while (time !== 0) {
  console.log("while loop running");
  time--;
}

//  foreach() loop
// mainly used on iterables like arrays
// access or use each item or value of an array
// syntax : array_name.foreach(function(value,index) {call back } )

var arr = [1, 2, 3, 4, 5];
console.log("foreach() loop ruuning");
arr.forEach(function (value, index) {
  console.log(index, ++value);
});

//  for-in loop (mainly use in objects)
// syntax for(let variable_name in arrORobject){ code }

console.log("for-in loop ruuning");
for (let value in arr) {
  console.log(arr[value]);
}

//  for-of loop 
// (same as for-in) (used in iterables-arrays , maps)
// syntax for(let value of arr_name) { code }

console.log("for-of loop ruuning");
for (let value of arr) {
  console.log(value * 2);
}
