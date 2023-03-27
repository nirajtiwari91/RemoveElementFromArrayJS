
let numbers = [1, 3, 4, 9, 2];
var numToRemove = 9

var i = 0;
for (i = 0; i < numbers.length - 1; i++) {
  if (numbers[i] == numToRemove)
    break;
}


for (var j = i; j < numbers.length - 1; j++) {
  numbers[j] = numbers[j + 1];
}

numbers.length--;

for (let k = 0; k < numbers.length; k++) {
  console.log(numbers[k]);
}
